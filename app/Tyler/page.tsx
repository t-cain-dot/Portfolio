"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PokemonData {
  name: string
  height: number
  weight: number
  sprites: {
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
  abilities: Array<{
    ability: { name: string }
    is_hidden: boolean
  }>
  moves: Array<{
    move: { name: string }
  }>
  held_items: Array<{
    item: { name: string }
  }>
  stats: Array<{
    stat: { name: string }
    base_stat: number
  }>
  types: Array<{
    type: { name: string }
  }>
}

export default function DittoPage() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDitto = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`)
        }
        const data = await response.json()
        setPokemon(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchDitto()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold">Loading Ditto...</div>
      </div>
    )
  }

  if (error || !pokemon) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-destructive">Error: {error}</div>
      </div>
    )
  }

  const statNames: { [key: string]: string } = {
    hp: "HP",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Sp. Atk",
    "special-defense": "Sp. Def",
    speed: "Speed",
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold capitalize mb-2">{pokemon.name}</h1>
          <div className="flex justify-center gap-2 flex-wrap">
            {pokemon.types.map((type) => (
              <Badge key={type.type.name} variant="secondary" className="text-sm">
                {type.type.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Sprite Card */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <img
                src={pokemon.sprites.other["official-artwork"].front_default || "/placeholder.svg"}
                alt={pokemon.name}
                className="w-48 h-48 object-contain mb-4"
              />
              <div className="text-center space-y-2 w-full">
                <div>
                  <p className="text-sm text-muted-foreground">Height</p>
                  <p className="font-semibold">{(pokemon.height * 0.1).toFixed(1)} m</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Weight</p>
                  <p className="font-semibold">{(pokemon.weight * 0.1).toFixed(1)} kg</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Base Stats</CardTitle>
              <CardDescription>Ditto's base statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pokemon.stats.map((stat) => (
                  <div key={stat.stat.name} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{statNames[stat.stat.name]}</span>
                      <span className="text-muted-foreground">{stat.base_stat}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="abilities" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="abilities">Abilities</TabsTrigger>
            <TabsTrigger value="moves">Moves</TabsTrigger>
            <TabsTrigger value="items">Held Items</TabsTrigger>
          </TabsList>

          {/* Abilities Tab */}
          <TabsContent value="abilities">
            <Card>
              <CardHeader>
                <CardTitle>Abilities</CardTitle>
                <CardDescription>Ditto's available abilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {pokemon.abilities.map((ability) => (
                    <div
                      key={ability.ability.name}
                      className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                    >
                      <span className="capitalize font-medium">{ability.ability.name}</span>
                      {ability.is_hidden && (
                        <Badge
                          variant="outline"
                          className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                        >
                          Hidden
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Moves Tab */}
          <TabsContent value="moves">
            <Card>
              <CardHeader>
                <CardTitle>Moves</CardTitle>
                <CardDescription>Moves that Ditto can learn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {pokemon.moves.length > 0 ? (
                    pokemon.moves.map((move) => (
                      <div key={move.move.name} className="p-3 bg-secondary rounded-lg capitalize font-medium">
                        {move.move.name}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No moves available</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Held Items Tab */}
          <TabsContent value="items">
            <Card>
              <CardHeader>
                <CardTitle>Held Items</CardTitle>
                <CardDescription>Items that Ditto can hold in the wild</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {pokemon.held_items.length > 0 ? (
                    pokemon.held_items.map((item) => (
                      <div key={item.item.name} className="p-3 bg-secondary rounded-lg capitalize font-medium">
                        {item.item.name}
                      </div>
                    ))
                  ) : (
                    <p className="text-muted-foreground">No held items available</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
