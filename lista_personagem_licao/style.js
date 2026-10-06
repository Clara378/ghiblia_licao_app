import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5', // Fundo em tom rosa bem claro
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d63384', // Rosa escuro
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#e83e8c', // Rosa médio
    textAlign: 'center',
    marginBottom: 20,
  },
  cardFilme: {
    backgroundColor: 'white',
     width: '48%',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#000',
  },
  cardDetalhes: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000',
  },

  imagemPersonagem: {
    width: 78,
    height: 98,
    borderRadius: 0,
    marginRight: 10,
    borderWidth: 0,
    borderColor: '#000',
  },
  inputFilme: {
    color: 'red',
    backgroundColor: 'white',
    borderWidth: 2,
    width: 250,
    height: 100,
    borderRadius: 10,
    marginBottom: 25,
  },
  length: {
    color: 'red',
    margin: 10,
  },
  filtrosGenero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    gap: 8,
    backgroundColor: '',
    borderRadius: 10,
  },
  button: {
    borderWidth: 2,
    backgroundColor: 'pink',
    borderRadius: 10,
    marginBottom: 10,
  },
  botao: {
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
  },
  botaofiltro: {
    backgroundColor: 'pink',
    borderRadius: 10,
    borderWidth: 2,
    marginBottom: 10,
  },
 lista: {
  justifyContent: 'space-between',
  marginBottom: 15,
}
});
