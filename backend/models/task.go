package models

import (
	"time"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// Task structure mirrors the frontend form data
type Task struct {
	ID             primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	ProjectName    string             `json:"projectName,omitempty" bson:"projectName,omitempty"`
	ContactEmail   string             `json:"contactEmail,omitempty" bson:"contactEmail,omitempty"`
	Description    string             `json:"description,omitempty" bson:"description,omitempty"`
	FreelancerType string             `json:"freelancerType,omitempty" bson:"freelancerType,omitempty"` 
	Status         string             `json:"status,omitempty" bson:"status,omitempty"` 
	CreatedAt      time.Time          `json:"createdAt,omitempty" bson:"createdAt,omitempty"`
}