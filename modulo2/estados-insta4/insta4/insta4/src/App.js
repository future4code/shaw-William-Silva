import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    id: 0,
    post: "",
    imagem: "",
    postagem: [
      {
        nome: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nome: "gabriel",
        fotoUsuario: "https://picsum.photos/50/51",
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nome: "laura",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ]
  };

  render() {
    const renderizaNaTela = this.state.postagem.map((postagem) => {
      return (
        <Post
          nome={postagem.nome}
          imagemDoUsuario={postagem.fotoUsuario}
          imagemDoPost={postagem.fotoPost}
          funcaoDeDeletar={this.DeletePost}
        />
      );
    });
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'gabriel'}
          fotoUsuario={'https://picsum.photos/50/51'}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post
          nomeUsuario={'laura'}
          fotoUsuario={'https://picsum.photos/50/52'}
          fotoPost={'https://picsum.photos/200/152'}
        />
      </div>
    );
  }
}

export default App;
