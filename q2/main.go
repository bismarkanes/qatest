package main

import (
	"errors"
	"fmt"
)

func CalculateAverage(input []int) (average float64, err error) {
	if len(input) == 0 {
		return 0.0, errors.New("cannot calculate average of an empty slice")
	}

	average = 0.0
	for _, value := range input {
		average = (average + float64(value)) / float64(len(input))
	}

	return average, nil
}

func main() {
	input := []int{10, 20, 30, 40}
	average, err := CalculateAverage(input)
	if err == nil {
		fmt.Println(average)
	} else {
		fmt.Println(err.Error())
	}
}
