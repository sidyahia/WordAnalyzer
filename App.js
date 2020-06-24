import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';
 
 export default class App extends Component {
   constructor(){
     super();
     
     this.state={
       input_word:" ",
       string:" ",
       Count_Consonant:0,
       Count_Vowel:0,
       Count_Char:0
      }
   }

 
   WordAnalyze = () =>{

    let Count_Consonant=0;
    let Count_Vowel=0;
    let Count_Char=0;
    let string=this.state.input_word;
    let str= string.split(' ',string.length);
    let word=this.state.input_word;
    
    Count_Char=word.length;

    for(var i=0; i < Count_Char; i++)
    {
      let per_char=word[i].toLowerCase();

      if(per_char=='a' || per_char=='e' || per_char=='i' || per_char=='o' || per_char=='u')
      {
        Count_Vowel++;
      }
      else
      {
        Count_Consonant++;
      }
      
    }
    this.setState({Count_Consonant:Count_Consonant, Count_Vowel:Count_Vowel, Count_Char:Count_Char, input_word: word});

 }
 
   render() {
     return (
       <View style={styles.container}>
      
         <Text>A Word Analyzer{"\n"}{"\n"}</Text>

         <TextInput onChangeText={(input_word) => this.setState({input_word})} placeholder='Type Your Word'/>

         <Text>{"\n"}{"\n"}</Text>

         <Button color="#32CD32"  onPress={this.WordAnalyze}  title='Analyze'/>

         <Text>{"\n"}{"\n"}Word: {this.state.input_word}{"\n"}{"\n"}</Text>

         <Text>No of consonant: {this.state.Count_Consonant}{"\n"}{"\n"}</Text>

         <Text>No of vowel: {this.state.Count_Vowel}{"\n"}{"\n"}</Text>

         <Text>No of characters: {this.state.Count_Char}{"\n"}{"\n"}</Text>
         
       </View>
     );
   }
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#cbcbcb',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });