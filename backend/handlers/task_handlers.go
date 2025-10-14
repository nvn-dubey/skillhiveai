package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"task-tracker-demo/backend/database"
	"task-tracker-demo/backend/models"
    "task-tracker-demo/backend/utils"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// PostTask handles the submission of a new task (POST /api/tasks)
func PostTask(w http.ResponseWriter, r *http.Request) {
    // Handle OPTIONS request
    if r.Method == "OPTIONS" {
        utils.RespondWithJSON(w, http.StatusOK, nil)
		return
	}

	var task models.Task
	if err := json.NewDecoder(r.Body).Decode(&task); err != nil {
		utils.RespondWithError(w, http.StatusBadRequest, "Invalid request payload")
		return
	}

	task.ID = primitive.NewObjectID()
	task.Status = "Open"
	task.CreatedAt = time.Now()

	collection := database.GetCollection("tasks") 
	_, err := collection.InsertOne(context.Background(), task)
	if err != nil {
		utils.RespondWithError(w, http.StatusInternalServerError, "Failed to insert task")
		return
	}

	utils.RespondWithJSON(w, http.StatusCreated, task)
}