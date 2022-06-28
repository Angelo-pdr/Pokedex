import 'package:flutter/material.dart';
import 'package:pokedex/common/repository/pokemonRepository.dart';
import 'package:pokedex/features/home/container/homeContainer.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Pokedex 2k22',
      theme: ThemeData(
       
        primarySwatch: Colors.red,
      ),
      home: HomeContainer( repository: PokemonRepository(),)
    );
  }
}
