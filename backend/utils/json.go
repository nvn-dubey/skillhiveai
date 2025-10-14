package utils

import (
	"encoding/json"
	"net/http"
	"log"
)

// RespondWithJSON writes a JSON response to the client.
func RespondWithJSON(w http.ResponseWriter, code int, payload interface{}) {
	// Set the Content-Type header
	w.Header().Set("Content-Type", "application/json")
    
    // Set CORS headers (essential for your React frontend)
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
    
	// Write the HTTP status code
	w.WriteHeader(code)
    
    // Encode the payload to JSON and write it to the response body
	if err := json.NewEncoder(w).Encode(payload); err != nil {
        log.Printf("Error encoding JSON response: %v", err)
    }
}

// RespondWithError sends a structured error message in JSON format.
func RespondWithError(w http.ResponseWriter, code int, message string) {
	// Create a simple map with an error field
    RespondWithJSON(w, code, map[string]string{"error": message})
}