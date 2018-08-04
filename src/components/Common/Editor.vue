
<template>
    <textarea :id="id" :value="value"></textarea>
</template>


<script>
    // Import TinyMCE
    import tinymce from 'tinymce/tinymce';
    import 'tinymce/themes/modern/theme';
    import 'tinymce/plugins/paste';
    import 'tinymce/plugins/link';
    const INIT = 0;
    const CHANGED = 2;
    var EDITOR = null;
    export default {
        name:"Editor",
        props: {
            value: {
                type: String,
                required: true
            },
            setting: {}
        },
        watch: {
            value: function (val) {
                if (this.status == INIT || tinymce.activeEditor.getContent() != val){
                    tinymce.activeEditor.setContent(val);
                }
                this.status = CHANGED
            }
        },
        data: function () {
            return {
                status: INIT,
                id: 'editor-'+new Date().getMilliseconds(),
            }
        },
        methods: {
        },
        mounted: function () {
            const _this = this;
            const setting =
                {
                    language_url: 'static/tinymce/langs/zh_CN.js',
                    language: 'zh_CN',
                    skin_url: 'static/tinymce/skins/lightgray',
                    selector:'#'+_this.id,
                    init_instance_callback:function(editor) {
                        EDITOR = editor;
                        editor.on('input change undo redo', () => {
                            var content = editor.getContent()
                            _this.$emit('input', content);
                        });
                    },
                    plugins:[]
                };
            Object.assign(setting,_this.setting)
            tinymce.init(setting);
        },
        beforeDestroy: function () {
            tinymce.get(this.id).destroy();
        }
    }
    
</script>
