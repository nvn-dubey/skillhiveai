package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"

	"task-tracker-demo/backend/database"
	"task-tracker-demo/backend/handlers"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Println("⚠️  .env not found, using system environment")
	}

	// Get backend port from environment or default to 8080
	port := os.Getenv("BACKEND_PORT")
	if port == "" {
		port = "8080"
	}
	addr := ":" + port

	// Connect to MongoDB
	database.ConnectDB()

	// Setup router
	router := mux.NewRouter()

	// --------------------------
	// API Routes
	// --------------------------
	api := router.PathPrefix("/api").Subrouter()
	api.HandleFunc("/register", handlers.RegisterUser).Methods("POST", "OPTIONS")
	api.HandleFunc("/tasks", handlers.PostTask).Methods("POST", "OPTIONS")

	// --------------------------
	// Serve React build folder
	// --------------------------
	frontendPath, err := filepath.Abs("../apnacard/build")
	if err != nil {
		log.Fatal("Failed to get absolute path for frontend build:", err)
	}

	// Serve /static/ folder (JS/CSS)
	router.PathPrefix("/static/").Handler(
		http.StripPrefix("/static/", http.FileServer(http.Dir(filepath.Join(frontendPath, "static")))),
	)

	// Serve /images/ folder (profile images)
	router.PathPrefix("/images/").Handler(
		http.StripPrefix("/images/", http.FileServer(http.Dir(filepath.Join(frontendPath, "images")))),
	)

	// Serve main index.html for SPA routing (React Router)
	router.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filepath.Join(frontendPath, "index.html"))
	})

	// --------------------------
	// Start server
	// --------------------------
	log.Printf("🚀 Backend running at http://localhost%s", addr)
	log.Printf("🌐 Serving React build from: %s", frontendPath)

	if err := http.ListenAndServe(addr, router); err != nil {
		log.Fatal("Server error:", err)
	}
}
