package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// User structure for registration and authentication
type User struct {
	ID       primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Name     string             `json:"name" bson:"name"`
	Email    string             `json:"email" bson:"email"`
	Password string             `json:"password,omitempty" bson:"password,omitempty"` // Stored as a hashed value
	Role     string             `json:"role" bson:"role"` // "client" or "freelancer"
}