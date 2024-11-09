import { FlatList, Text } from 'react-native'
import { Movie } from '../config/entities/Movie';

interface ShowFilmProps {
    nowPlaying: Movie[]; // Un array de objetos tipo Movie
    loading: boolean;    // Estado de carga
  }

export default function ShowFilm({ nowPlaying, loading }: ShowFilmProps) {

    if(!loading) {
        return(
            <Text>CARGANDO...</Text>
        );
    }

    return(
        <FlatList
        data={nowPlaying}
        renderItem={({item}) => (<Text>{item.title}</Text>)}
        keyExtractor={item => "id : " + item.id}
      />
    );
}