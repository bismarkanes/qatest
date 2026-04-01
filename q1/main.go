package main

import (
	"errors"
	"fmt"
)

type Product struct {
	Name  string
	Price float64
}

func (p *Product) getPriceWithTax(tax float64) float64 {
	return p.Price + (p.Price * tax)
}

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
	product := Product{
		Name:  "Laptop",
		Price: 1200,
	}

	fmt.Println(product.getPriceWithTax(0.07))
}
