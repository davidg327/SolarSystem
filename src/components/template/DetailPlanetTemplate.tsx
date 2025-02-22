import React from 'react';
import {ScrollView, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {IconComponent, ImageComponent, TextComponent} from "../atoms";
import {Header} from '../organisms';
import {imagesPlanets} from "../../functions";
import {Colors, IMoons, IPlanet} from "../../theme";
import {detailPlanetTemplateStyles} from "./template.styles.ts";


interface IDetailPlanetTemplate {
    planet: IPlanet;
}

export const DetailPlanetTemplate = ({planet}: IDetailPlanetTemplate) => {
    const {name, image} = imagesPlanets(planet.englishName);
    const navigation = useNavigation();
    console.log(planet, 'planet');
    return (
        <View style={detailPlanetTemplateStyles.container}>
            <Header name={name} goBack={() => navigation.goBack()} />
            <ImageComponent styles={detailPlanetTemplateStyles.image} resize={'cover'} url={image} />
            <ScrollView>
                <View style={detailPlanetTemplateStyles.containerInfo}>
                    <View style={detailPlanetTemplateStyles.containerHeaderInfo}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Información'} />
                        <IconComponent name={'heart-o'} color={Colors.black} size={25} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerText}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Gravedad:'} />
                        <TextComponent styles={detailPlanetTemplateStyles.info} text={`${planet.gravity}`} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerText}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Inclinación:'} />
                        <TextComponent styles={detailPlanetTemplateStyles.info} text={`${planet.inclination}`} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerText}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Densidad:'} />
                        <TextComponent styles={detailPlanetTemplateStyles.info} text={`${planet.density}`} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerText}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Masa:'} />
                        <TextComponent styles={detailPlanetTemplateStyles.info} text={`${planet.mass.massValue}`} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerText}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Volumen:'} />
                        <TextComponent styles={detailPlanetTemplateStyles.info} text={`${planet.vol.volValue}`} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerText}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Periodo orbital:'} />
                        <TextComponent styles={detailPlanetTemplateStyles.info} text={`${planet.sideralOrbit} días`} />
                    </View>
                    <View style={detailPlanetTemplateStyles.containerOnlyInfo}>
                        <TextComponent styles={detailPlanetTemplateStyles.title} text={'Lunas:'} />
                        <View style={detailPlanetTemplateStyles.containerMoons}>
                            {planet.moons.map((moon: IMoons, index: number) => (
                                <TextComponent
                                    key={index}
                                    styles={detailPlanetTemplateStyles.infoMoon}
                                    text={moon.moon}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
