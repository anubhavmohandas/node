***Page 1 ***
List of City 
>    Local - http://localhost:6700/location
>    Live - 

List of Restaurant
>    Local - http://localhost:6700/restaurantdata
>    Live - 
restaurant with respect to city
>    Local - http://localhost:6700/restaurantdata?state_id=3
>    Live - 
Quick Search Data (mealtype)
>    Local - http://localhost:6700/mealtype
>    Live -


***Page 2 ***
Restaurant with respect to state and mealtype
> Local: - http://localhost:6700/restaurantdata?state_id=4&meal_id=5

Restaurant with respect to Quick Search
> Local - http://localhost:6700/restaurantdata?meal_id=5

/// filter data: - ///
cuisine filter (data with respect to cuisine and quick search)
> Local - http://localhost:6700/filter/1?cuisine=2
> Live - 

cost filter
> Local - http://localhost:6700/filter/2?lcost=250&hcost=500
> Live - 

data respect to cuisine and cost (cuisine filter + cost filter)
> Local - http://localhost:6700/filter/1?lcost=250&hcost=500&cuisineId=4
> Live - 

sort sort low to high in same quickSearch
> Local - http://localhost:6700/filter/1?lcost=250&hcost=500&cuisineId=1&sort=1
> Live - 

sort high to low in same quickSearch
> Local - http://localhost:6700/filter/1?lcost=250&hcost=500&cuisineId=1&sort=-1
> Live - 

Paginations
> Local - http://localhost:6700/filter/1?cuisineId=1&skip=12&limit=1
> Live - 

*** Page 3: -***
restaurants details
> Local - http://localhost:6700/details/3
> Live - 

Menu of that restaurants 
> Local - http://localhost:6700/menu/1
> Live - 

page 4 : -
menu items on user selection
> Local - localhost:6700/menuItem 
        [4,5,7]


api to place order
> Local - localhost:6700/placeOrder
> Live - 

Delete order
> Local - localhost:6700/deleteOrder

update order
> Local - localhost:6700/updateOrder/621228313aa7a46d5cf5c7ba?status=success


page 5 : -
list all order 
> Local - http://localhost:6700/orders?email=a@gmail.com or http://localhost:6700/orders


