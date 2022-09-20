import React from 'react'

export default function Recipe({title, recipe,image,ingredients,calories}) {
  return (
    <div className="w-[500px] mx-auto bg-white rounded-xl shadow-md overflow-hidden max-w-2xl m-3">
        <div className="md:flex md:h-48 md:w-[500px] ">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt="recipe"/>
            </div>
            <div className="p-5 overflow-auto w-full">
              <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">{title}</div>
              <ol className="mt-2 text-slate-500 ">
                {ingredients.map(ingredient => (<li>{ingredient.text}</li>) )}
              </ol>
            </div>
        </div>
    </div>
  )
}
