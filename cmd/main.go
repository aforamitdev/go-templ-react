package main

import (
	"fmt"
	"goreact/components"
	"log"
	"net/http"

	"github.com/a-h/templ"
)

func main() {
	mux := http.NewServeMux()

	mux.Handle("/dashboard", templ.Handler(components.Dashboard()))
	mux.Handle("/profile", templ.Handler(components.Profile()))
	mux.Handle("/settings", templ.Handler(components.Settings()))

	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	fmt.Println("listening on localhost:8080")
	if err := http.ListenAndServe("localhost:8000", mux); err != nil {
		log.Printf("error listening: %v", err)
	}
}
