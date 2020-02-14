import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Login from './pages/Login';
import Materiais from './pages/Materiais';
import Ferramentas from './pages/Ferramentas';
import Ordem from './pages/Ordem';
import MateriasEmprestados from './pages/MateriaisEmprestados';
import FerramentasEmprestadas from './pages/FerramentasEmprestadas';
import CriarFunc from './pages/CriarFunc';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Login,
            navigationOptions:{
                title: 'Login'
            },
        },
        Menu: {
            screen: Main,
            navigationOptions:{
                title: 'Menu'
            },
        },
        Materiais: {
            screen: Materiais
        },
        Ferramentas: {
            screen: Ferramentas
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
        CriarFunc: {
            screen: CriarFunc,
            navigationOptions: {
                title: 'Criar Usuário'
            }
        }

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