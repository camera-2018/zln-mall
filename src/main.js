import { createApp } from 'vue'
import App from './App.vue'
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';
import { Card } from 'vant';
import { ConfigProvider } from 'vant';
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import {createRouter,createWebHashHistory} from 'vue-router';
import { Cell, CellGroup } from 'vant';
import { Progress } from 'vant';
import { Step, Steps } from 'vant';
import 'uno.css'
import routes from './router'
const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(router);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(Grid);
app.use(GridItem);
app.use(DropdownMenu);
app.use(DropdownItem);
app.use(Card);
app.use(ConfigProvider);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(Cell);
app.use(CellGroup);
app.use(Progress);
app.use(Step);
app.use(Steps);
app.mount('#app')