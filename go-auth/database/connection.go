package database

import (
	"go-auth/models"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	conn, err := gorm.Open(mysql.Open("root@/go_auth"), &gorm.Config{})
	if err != nil {
		log.Fatal("could not connect to the database", err)
	}

	DB = conn

	conn.AutoMigrate(models.User{})
}
