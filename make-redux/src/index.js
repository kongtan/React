const appState = {
    title: {
        text: 'React.js 小书',
        color: 'red',
    },
    content: {
        text: 'React.js 小书内容',
        color: 'blue'
    }
}
const stateChanger = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color
            break
        default:
            break
    }
}
const createStore = (state, stateChanger) => {
    const listrners=[];
    const subscribe =(listener)=>{listrners.push(listener)};
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action);
        listrners.forEach((listener) => listener());
    }
    return { getState, dispatch ,subscribe}
}
const store=createStore(appState,stateChanger);;
store.subscribe(() => renderApp(store.getState()));

function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(content) {
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}
renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色