import 'dart:convert';

import 'package:dio/dio.dart';
import 'package:pokedex/common/consts/api_consts.dart';
import 'package:pokedex/common/models/pokemon.dart';

abstract class IPokemonRepository {
  Future<List<Pokemon>> getAllPokemons();
}

class PokemonRepository implements IPokemonRepository {
  final Dio dio;
  PokemonRepository({required this.dio});
  @override
  Future<List<Pokemon>> getAllPokemons() {
    try{
      final response = await dio.get(ApiConsts.allPokemonsURL);
      final json= jsonDecode(response.data) as Map<String, dynamic>;
      final list = json["pokemon"]as Map<String, dynamic>;  
      list.map((e) => null);

    }
    catch (e){

    }
  }
}
