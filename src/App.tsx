import 'amis/lib/themes/cxd.css';
import 'amis/lib/helper.css';
import 'amis/sdk/iconfont.css';
import 'amis-editor-core/lib/style.css';
import {Editor} from "amis-editor";
import {setDefaultTheme} from 'amis';
import {setThemeConfig} from 'amis-editor-core';
import themeConfig from 'amis-theme-editor-helper/lib/systemTheme/cxd';

setDefaultTheme('cxd');
setThemeConfig(themeConfig);

function App() {
    let value: any = {};

    function onChange(value: any) {
        console.log(value);
    }

    return (
        <>
            <Editor
                value={value}
                onChange={onChange}>
            </Editor>
        </>
    )
}

export default App
