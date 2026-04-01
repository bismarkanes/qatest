package main

import (
	"fmt"
	"strconv"
)

func main() {
	inventory := map[string]int{
		"apple":  10,
		"banana": 5,
		"orange": 0,
	}

	for name, qty := range inventory {
		if qty == 0 {
			fmt.Println(name + " is out of stock.")
			continue
		}

		fmt.Println(name + " has " + strconv.Itoa(qty) + " items.")
	}
}
