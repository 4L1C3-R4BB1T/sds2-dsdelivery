import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, ScrollView, Alert, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        if (isFocused) { fetchData(); }
    }, [isFocused]);

    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', { order });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
                {isLoading ? (
                    <>
                        <Text style={styles.loading}>Buscando pedidos...</Text>
                        <ActivityIndicator size="large" color="#DA5C5C" />    
                    </> 
                ) : (
                        orders.map(order => (
                            <TouchableWithoutFeedback
                                key={order.id}
                                onPress={() => handleOnPress(order)}
                            >
                                <OrderCard order={order} />
                            </TouchableWithoutFeedback>
                        ))
                    )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    },
    loading: {
        textAlign: 'center',
        fontFamily: 'OpenSans_400Regular',
        marginTop: '50%',
        marginBottom: 30,
        fontSize: 20
    }
});
