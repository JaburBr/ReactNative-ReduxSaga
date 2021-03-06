import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FavoritesActions } from '../../store/ducks/favorites';

class Main extends Component {

  static navigationOptions = {
    header: null,
  };

  static propType = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  };

  state = {
    repoNameInput: '',
  };

  navigateToFavorites = () => {
    this.props.navigation.navigate('Favorites');
  };

  addRepository = () => {
    if (!this.state.repoNameInput.length) return;

    this.props.addFavoriteRequest(this.state.repoNameInput);
  };

  render() {
    console.tron.log(this.props);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />

        <View style={styles.content}>
          <Text style={styles.title}> Gitmark </Text>
          <Text style={styles.description}>
            Comece adicionando alguns repositorios aos seus favoritos
        </Text>

          <View style={styles.form}>
            {!!this.props.errorOnAdd && (
              <Text style={styles.errorMessage}>{this.props.errorOnAdd}</Text>
            )}

            <TextInput
              style={styles.input}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='usuário/repositorio'
              underlineColorAndroid='transparent'
              value={this.state.repoNameInput}
              onChangeText={repoNameInput => this.setState({ repoNameInput })}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              {!this.props.loading
                ? <Text style={styles.buttonText}>Adicionar aos favoritos </Text>
                : <ActivityIndicator size='small' color='#FFF' />
              }
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.navigateToFavorites} >
            <Text style={styles.footerLink}>Meus Favoritos ({this.props.favoritesCount})</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
  };
};

const mapStateToProps = state => ({
  favoritesCount: state.favorites.data.length,
  errorOnAdd: state.favorites.errorOnAdd,
  loading: state.favorites.loading,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(FavoritesActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Main);
