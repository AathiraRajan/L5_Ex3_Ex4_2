import React from 'react';
import { View, Text, Image, TouchableOpacity, SectionList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// //Exercise 3
// const pokemonData = [
//   {
//     title: "Fire",
//     icon: "fire",
//     color: "#FF6347",
//     data: [
//       { name: 'Charmander', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4.png' },
//       { name: 'Charizard', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6.png' },
//     ],
//   },
//   {
//     title: "Normal",
//     icon: "circle-o",
//     color: "#A9A9A9",
//     data: [
//       { name: 'Meowth', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_52.png' },
//       { name: 'Persian', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_53.png' },
//     ],
//   },
//   {
//     title: "Psychic",
//     icon: "eye",
//     color: "#800080",
//     data: [
//       { name: 'Gastly', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_92.png' },
//       { name: 'Gengar', imageUrl: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_94.png' },
//     ],
//   },
// ];
//
// const App = () => {
//   const renderPokemonItem = ({ item }) => (
//       <TouchableOpacity style={styles.pokemonItem} onPress={() => alert(`Clicked on ${item.name}`)}>
//         <Text style={styles.pokemonName}>{item.name}</Text>
//         <Image source={{ uri: item.imageUrl }} style={styles.pokemonImage} />
//       </TouchableOpacity>
//   );
//
//   const renderSectionHeader = ({ section }) => (
//       <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
//         <Icon name={section.icon} size={20} color="#fff" style={styles.sectionIcon} />
//         <Text style={styles.sectionTitle}>{section.title}</Text>
//       </View>
//   );
//
//   return (
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.addButton} onPress={() => alert('Add Pokemon functionality coming soon!')}>
//           <Text style={styles.addButtonText}>ADD POKEMON</Text>
//         </TouchableOpacity>
//         <SectionList
//             sections={pokemonData}
//             keyExtractor={(item, index) => item.name + index}
//             renderItem={renderPokemonItem}
//             renderSectionHeader={renderSectionHeader}
//         />
//       </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   addButton: {
//     backgroundColor: '#3498db',
//     paddingVertical: 10,
//     marginHorizontal: 20,
//     marginBottom: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 5,
//     paddingLeft: 20,
//   },
//   sectionIcon: {
//     marginRight: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   pokemonItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   pokemonName: {
//     flex: 1,
//     fontSize: 16,
//   },
//   pokemonImage: {
//     width: 140,
//     height: 190,
//   },
// });
//
// export default App;

//Exercise4
const carData = [
    {
        title: "Chevrolet",
        icon: "car",
        color: "#8B4513", // Brown for vintage Chevrolet
        data: [
            { name: '1967 Chevrolet Impala', imageUrl: 'https://i.pinimg.com/736x/71/08/f3/7108f3e25979149764f39e74bdef24df.jpg' },
            { name: '1957 Chevrolet 150', imageUrl: 'https://photos.classiccars.com/cc-temp/listing/153/2518/28547934-1957-chevrolet-150-thumb.jpg' },
        ],
    },
    {
        title: "Ford",
        icon: "car",
        color: "#2F4F4F", // Dark slate gray for Ford
        data: [
            { name: '1966 Ford Mustang', imageUrl: 'https://photos.classiccars.com/cc-temp/listing/186/1851/47138570-1966-ford-mustang-thumb.jpg' },
            { name: '1970 Ford Torino', imageUrl: 'https://st.hotrod.com/uploads/sites/21/2014/11/1970-ford-torino-in-motion.jpg' },
        ],
    },
    {
        title: "Alfa Romeo",
        icon: "car",
        color: "#800000", // Dark red for Alfa Romeo
        data: [
            { name: '1969 Alfa Romeo 1750 Veloce', imageUrl: 'https://photos.classiccars.com/cc-temp/listing/183/8314/45470935-1969-alfa-romeo-1750-spider-veloce-thumb.jpg' },
            { name: '1969 Alfa Romeo Boat Tail Spider', imageUrl: 'https://i.pinimg.com/736x/b4/db/00/b4db00ad4a429428964dd30a684a44c5.jpg' },
        ],
    },
];

const App = () => {
    const renderCarItem = ({ item }) => (
        <TouchableOpacity style={styles.carItem} onPress={() => alert(`Clicked on ${item.name}`)}>
            <Image source={{ uri: item.imageUrl }} style={styles.carImage} />
            <Text style={styles.carName}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
            <Icon name={section.icon} size={20} color="#fff" style={styles.sectionIcon} />
            <Text style={styles.sectionTitle}>{section.title}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.addButton} onPress={() => alert('Add Car functionality coming soon!')}>
                <Text style={styles.addButtonText}>ADD CAR</Text>
            </TouchableOpacity>
            <SectionList
                sections={carData}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderCarItem}
                renderSectionHeader={renderSectionHeader}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FAF3E3', // Soft beige background
    },
    addButton: {
        backgroundColor: '#3D85C6', // Subtle blue for a classic feel
        paddingVertical: 12,
        marginHorizontal: 20,
        marginBottom: 15,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingLeft: 20,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    sectionIcon: {
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    carItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    carName: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginLeft: 15,
    },
    carImage: {
        width: 140,
        height: 120,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
});

export default App;
