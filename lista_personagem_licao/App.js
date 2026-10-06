import React, { useState, useEffect } from 'react';

import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  View,
  Image,
  TextInput,
} from 'react-native';

import { buscarFilme } from './services/personagen';
import styles from './style';

export default function App() {
  const [filme, setFilme] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [pesquisa, setPesquisa] = useState('');
  const [ordem, setOrdem] = useState('AZ');

  async function carregarFilmes() {
    try {
      setCarregando(true);

      const filmes = await buscarFilme();

      setFilme(filmes);
    } catch (erro) {
      console.error(erro);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    carregarFilmes();
  }, []);

  const filmesEncontrados = filme.filter((item) =>
    item.title.toLowerCase().includes(pesquisa.toLowerCase())
  );
  const filmesOrdenados = [...filmesEncontrados].sort((a, b) => {
    if (ordem === 'AZ') {
      return a.title.localeCompare(b.title);
    }

    if (ordem === 'ZA') {
      return b.title.localeCompare(a.title);
    }

    if (ordem === 'ANO') {
      return Number(a.release_date) - Number(b.release_date);
    }

    return 0;
  });
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Studio Ghibli</Text>

      <Text style={styles.subtitulo}>Filmes</Text>

      {carregando && <ActivityIndicator size="large" />}

      <TextInput
        style={styles.inputFilme}
        placeholder="Digite o nome do filme"
        value={pesquisa}
        onChangeText={setPesquisa}
      />
      <View style={styles.filtrosGenero}>
        <TouchableOpacity style={styles.button} onPress={() => setOrdem('AZ')}>
          <Text>Ordene por A - Z</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setOrdem('ZA')}>
          <Text>Ordene por Z - A</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaofiltro}
          onPress={() => setOrdem('ANO')}>
          <Text>Por ano</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.length}>
        Filmes encontrados: {filmesEncontrados.length}
      </Text>
      <FlatList
        data={filmesOrdenados}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.lista}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.cardFilme}
            onPress={() => setFilmeSelecionado(item)}>
            <Image
              source={{ uri: item.image }}
              style={styles.imagemPersonagem}
            />
            <View style={styles.informacoesFilme}>
              <Text style={styles.tituloFilme}>Nome: {item.title}</Text>
              <Text style={styles.directorFilme}>Diretor: {item.director}</Text>
              <Text style={styles.release_dateFilme}>
                Lançamento: {item.release_date}{' '}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {filmeSelecionado && (
        <View style={styles.cardDetalhes}>
          <Text style={styles.detalhesTitulo}>Detalhes do Filme</Text>

          <Text>Nome: {filmeSelecionado.title}</Text>

          <Text>Diretor: {filmeSelecionado.director}</Text>

          <Text>Produtor: {filmeSelecionado.producer}</Text>

          <Text>Ano de lançamento: {filmeSelecionado.release_date}</Text>

          <Text>Duração: {filmeSelecionado.running_time}</Text>

          <TouchableOpacity
            style={styles.botaoFechar}
            onPress={() => setFilmeSelecionado(null)}>
            <Text style={styles.textoBotaoFechar}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
