import 'package:flutter/material.dart';
import 'package:pokedex/common/models/pokemon.dart';
import 'package:pokedex/common/repository/pokemonRepository.dart';
import 'package:pokedex/features/home/pages/homeError.dart';
import 'package:pokedex/features/home/pages/homeLoading.dart';
import 'package:pokedex/features/home/pages/homePage.dart';

class HomeContainer extends StatelessWidget {

  const HomeContainer({Key? key, required this.repository}) : super(key: key);
  final IPokemonRepository repository;
  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Pokemon>>(
      future: repository.getAllPokemons(),
      builder: (context, snapshot) {

        if (snapshot.connectionState == ConnectionState.waiting) {
          return HomeLoaging();
        }
        if (snapshot.connectionState == ConnectionState.done &&
            snapshot.hasData) {
          return HomePage(list: snapshot.data!);
        }
        if (snapshot.hasError) {
          return HomeError(error: snapshot.error.toString());
        }
        return Container();
    });
  }
}
