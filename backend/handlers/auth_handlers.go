package handlers

import (
	"context"
	"encoding/json"
	"net/http"

	"task-tracker-demo/backend/database"
	"task-tracker-demo/backend/models"
	"task-tracker-demo/backend/utils"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"golang.org/x/crypto/bcrypt"
)

func RegisterUser(w http.ResponseWriter, r *http.Request) {
	if r.Method == "OPTIONS" {
		utils.RespondWithJSON(w, http.StatusOK, nil)
		return
	}

	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	collection := database.GetCollection("users")
	var existingUser models.User
	err := collection.FindOne(context.Background(), bson.M{"email": user.Email}).Decode(&existingUser)
	if err == nil {
		utils.RespondWithError(w, http.StatusConflict, "User with this email already exists.")
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, "Failed to hash password")
		return
	}
	user.Password = string(hashedPassword)
	user.ID = primitive.NewObjectID()

	_, err = collection.InsertOne(context.Background(), user)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, "Failed to register user")
		return
	}

	user.Password = ""
	utils.RespondWithJSON(w, http.StatusCreated, user)
}
