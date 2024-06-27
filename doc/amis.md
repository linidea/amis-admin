# AMIS

## 快速开始

项目中引入 AMIS 的编辑器,依赖参考 [amis-editor-demo](https://github.com/aisuda/amis-editor-demo)
项目,尽量与该项目保持一致避免出现因为版本不一致导致的问题.

## 主要依赖与版本

```
"amis": "^6.5.0",
"amis-core": "^6.5.0",
"amis-editor": "^6.5.0",
"amis-editor-core": "^6.5.0",
"amis-formula": "^6.5.0",
"amis-ui": "^6.5.0",
"monaco-editor": "^0.50.0",
```

## AMIS Editor 配置

```tsx
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
```


