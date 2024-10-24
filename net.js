let show = document.getElementById('btn');




function FoodRecipe() {

    let DishName = document.getElementById('input_1').value
    let PageLimit = document.getElementById('input_2').value
    let Suggestion = document.getElementById('input_3').value
    let foodApi = `https://api.freeapi.app/api/v1/public/meals?page=${Suggestion}&limit=${PageLimit}&query=${DishName}`

    
    fetch(foodApi)
        .then(Response => Response.json())
        .then(data => {

            if (data.statusCode === 200 && Array.isArray(data.data.data)) {
                console.log(data.data.data)
                let content = document.getElementById('content-1')
                
                content.innerHTML = ''

                data.data.data.forEach(Meal => {

                    let MealSpac = document.createElement('section')
                    MealSpac.innerHTML = 
                    `<img src="${Meal.strMealThumb}" alt="${Meal.strCategory}" width="200">
                    <h3> ${Meal.strMeal} </h3>
                    <p> ${Meal.strInstructions} </p>`
                    content.appendChild(MealSpac)

                })



            }
            else {
                alert("No Meal Found Occured !!")
            }




        }).catch(error => {
            console.log(error)
            console.log("Server is Down That's why the api is not working !!!")
        })




}

show.addEventListener('click', FoodRecipe) 