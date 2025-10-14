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

// RegisterUser handles new user registration (POST /api/register)
func RegisterUser(w http.ResponseWriter, r *http.Request) {
    // Handle OPTIONS request
    if r.Method == "OPTIONS" {
        utils.RespondWithJSON(w, http.StatusOK, nil)
		return
	}

	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	// 1. Check if user already exists (by email)
	collection := database.GetCollection("users") 
	var existingUser models.User
	err := collection.FindOne(context.Background(), bson.M{"email": user.Email}).Decode(&existingUser)
	if err == nil {
		utils.RespondWithError(w, http.StatusConflict, "User with this email already exists.")
		return
	}

	// 2. Hash the password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, "Failed to hash password")
		return
	}
	user.Password = string(hashedPassword)
	user.ID = primitive.NewObjectID()

	// 3. Insert the new user
	_, err = collection.InsertOne(context.Background(), user)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, "Failed to register user")
		return
	}

	// Remove password before sending response
	user.Password = "" 
	utils.RespondWithJSON(w, http.StatusCreated, user)
}