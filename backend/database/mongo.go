package database

import (
	"context"
	"log"
	"os"
	"time"

	// Removed dependency on godotenv here since it is loaded in main.go

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

// ConnectDB establishes the connection to MongoDB
func ConnectDB() {
	// NOTE: godotenv.Load() is now handled exclusively in main.go, 
	// so we directly read the environment variable here.

	mongoURI := os.Getenv("MONGO_URI")
	if mongoURI == "" {
		log.Fatal("MONGO_URI is not set in the environment or .env file.")
	}

	clientOptions := options.Client().ApplyURI(mongoURI)
	// Increased context timeout slightly for robust connections
	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second) 
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("Failed to connect to MongoDB:", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal("Failed to ping MongoDB:", err)
	}

	Client = client
	log.Println("Successfully connected to MongoDB!")
}

// GetCollection returns a handle to a MongoDB collection
func GetCollection(collectionName string) *mongo.Collection {
	dbName := os.Getenv("MONGO_DB_NAME")
	if dbName == "" {
		dbName = "skillhiveDB"
		log.Println("MONGO_DB_NAME not set. Using default: skillhiveDB")
	}

	return Client.Database(dbName).Collection(collectionName) 
}
