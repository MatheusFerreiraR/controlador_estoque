import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Materias from './pages/Materias';
import Ordem from './pages/Ordem';
import MateriasEmprestados from './pages/MateriaisEmprestados';
import FerramentasEmprestadas from './pages/FerramentasEmprestadas';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions:{
                title: 'Menu'
            },
        },
        Materias: {
            screen: Materias
        },
        Ordem: {
            screen: Ordem,
            navigationOptions:{
                title: 'Cadastro de OS'
            },
        },
        MateriasEmprestados: {
            screen: MateriasEmprestados,
            navigationOptions: {
                title: 'Materias Emprestados'
            }
        },
        FerramentasEmprestadas: {
            screen: FerramentasEmprestadas,
            navigationOptions: {
                title: 'Ferramentas Emprestados'
            }
        },

    }, {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: "#d1af3e",
            },
        }
    })
);

export default Routes;