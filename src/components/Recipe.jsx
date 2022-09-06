import React from 'react'

export default function Recipe() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
        <div className="md:flex">
            <div className="md:shrink-0">
                <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg" alt="kithen"/>
            </div>
            <div className="p-5">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">title
            </div>
            <p className="block mt-1 text-lg leading-tight font-medium text-black" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, atque!</p>
            <p className="mt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero quis nisi possimus eum fugiat cumque sit dolor quaerat repudiandae odio repellat enim, consectetur quos optio? Laudantium obcaecati alias labore?</p>
            </div>
        </div>
    </div>
  )
}
