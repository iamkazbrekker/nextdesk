"use client"

import { Heart } from "lucide-react"
import Image from "next/image"

export default function ProductCard({
    src,
    price,
    name,
}: {
    src: string
    price: string
    name: string
}) {
    return (
        <div className="relative w-full rounded-xl border bg-white p-3 shadow-sm overflow-hidden">

            {/* Blue Accent Bar */}
            <div className="absolute left-0 bottom-3 h-14 w-1.5 bg-blue-500 rounded-r-md" />

            {/* Heart Icon */}
            <button className="absolute right-3 top-3 rounded-full border border-black bg-white p-1.5 z-45">
                <Heart className="h-4 w-4" />
            </button>

            {/* Book Image */}
            <div className="relative aspect-3/4 w-full">
                <Image
                    src={src}
                    alt={name}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Price */}
            <div className="mt-3 text-xl font-bold">{price}</div>

            {/* Title */}
            <div className="mt-1 text-sm text-gray-800 line-clamp-2">
                {name}
            </div>
        </div>
    )
}