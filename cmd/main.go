package main

import (
	"encoding/json"
	"fmt"
	"goreact/components"
	"log"
	"net/http"

	"github.com/a-h/templ"
)

type Dashboard struct {
	Data string `json:"data"`
}

func main() {
	mux := http.NewServeMux()

	d := Dashboard{Data: "dashboard data"}
	json, err := json.Marshal(d)
	if err != nil {
		fmt.Println("failed to parsed json ")
	}
	mux.Handle("/dashboard", templ.Handler(components.Dashboard(string(json))))
	mux.Handle("/profile", templ.Handler(components.Profile()))
	mux.Handle("/settings", templ.Handler(components.Settings()))

	mux.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))

	fmt.Println("listening on localhost:8080")
	if err := http.ListenAndServe("localhost:8000", mux); err != nil {
		log.Printf("error listening: %v", err)
	}
}
