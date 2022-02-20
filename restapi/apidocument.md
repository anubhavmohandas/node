***Page 1 ***
List of City 
>    Local - http://localhost:6700/location
>    Live - https://zomatonod.herokuapp.com/location

List of Restaurant
>    Local - http://localhost:6700/restaurantdata
>    Live - https://zomatonod.herokuapp.com/restaurantdata
restaurant with respect to city
>    Local - http://localhost:6700/restaurantdata?state_id=3
>    Live - https://zomatonod.herokuapp.com/restaurantdata?state_id=3

Quick Search Data (mealtype)
>    Local - http://localhost:6700/mealtype
>    Live - https://zomatonod.herokuapp.com/mealtype


***Page 2 ***
Restaurant with respect to state and mealtype
> Local: - http://localhost:6700/restaurantdata?state_id=4&meal_id=5
> Live - https://zomatonod.herokuapp.com/restaurantdata?state_id=4&meal_id=5

Restaurant with respect to Quick Search
> Local - http://localhost:6700/restaurantdata?meal_id=5
> Live - https://zomatonod.herokuapp.com/mealtype

/// filter data: - ///
cuisine filter (data with respect to cuisine and quick search)
> Local - http://localhost:6700/filter/restaurantdata?meal_id=5
> Live - https://zomatonod.herokuapp.com/restaurantdata?meal_id=5

cost filter
> Local - http://localhost:6700/filter/2?lcost=250&hcost=500
> Live - https://zomatonod.herokuapp.com/filter/2?lcost=250&hcost=500

data respect to cuisine and cost (cuisine filter + cost filter)
> Local - http://localhost:6700/filter/1?lcost=250&hcost=500&cuisineId=1
> Live - https://zomatonod.herokuapp.com/filter/2?lcost=250&hcost=500&cuisineId=1

sort low to high in same quickSearch
> Local - http://localhost:6700/filter/1?lcost=250&hcost=500&cuisineId=1&sort=1
> Live - https://zomatonod.herokuapp.com/filter/1?lcost=250&hcost=500&cuisineId=1&sort=1

sort high to low in same quickSearch
> Local - http://localhost:6700/filter/1?lcost=250&hcost=500&cuisineId=1&sort=-1
> Live - https://zomatonod.herokuapp.com/filter/1?lcost=250&hcost=500&cuisineId=1&sort=-1

All restaurant Data sort
> Local - http://localhost:6700/filter/1?sort=1
> Live - https://zomatonod.herokuapp.com/filter/1?sort=1

Paginations
> Local - http://localhost:6700/filter/1?cuisineId=1&skip=12&limit=1
> Live - https://zomatonod.herokuapp.com/filter/1?cuisineId=1&skip=12&limit=1

*** Page 3: -***
restaurants details
> Local - http://localhost:6700/details/3
> Live - https://zomatonod.herokuapp.com/details/3

Menu of that restaurants 
> Local - http://localhost:6700/menu/1
> Live - https://zomatonod.herokuapp.com/menu/1

page 4 : -
menu items on user selection
> Local - localhost:6700/menuItem 
        [4,5,7]
> Live - https://zomatonod.herokuapp.com/menuItem 


api to place order
> Local - localhost:6700/placeOrder
> Live - https://zomatonod.herokuapp.com/placeOrder 

Delete order
> Local - localhost:6700/deleteOrder
> Live - https://zomatonod.herokuapp.com/deleteOrder

update order
> Local - localhost:6700/updateOrder/621228903aa7a46d5cf5c7bb?status=success
> Live - https://zomatonod.herokuapp.com/621228903aa7a46d5cf5c7bb?status=success


page 5 : -
list all order 
> Local - http://localhost:6700/orders?email=a@gmail.com or http://localhost:6700/orders
> Live - https://zomatonod.herokuapp.com/orders?email=a@gmail.com or https://zomatonod.herokuapp.com/orders


