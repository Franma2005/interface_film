import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useMovies } from '../hooks/useMovies'
import ShowFilm from './ShowFilm';

export default function HomeScreen() {
    const {nowPlaying, loading} = useMovies();
  return (
    <View>
      <ShowFilm nowPlaying={nowPlaying} loading={loading} />
    </View>
  )
}

const styles = StyleSheet.create({})