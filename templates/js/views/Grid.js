Ext.define('{{applicationName}}.view.{{instanceName}}.Grid',
{
    extend : 'Ext.ux.uji.grid.Panel',

    alias : 'widget.{{instanceName}}Grid',
    requires : [ '{{applicationName}}.view.{{instanceName}}.GridModel', '{{applicationName}}.store.{{modelName}}' ],

    store :
    {
        type : '{{instanceName}}'
    },

    title : '{{modelName}}s',

    columns : [
    {
        text : 'ID',
        dataIndex : 'id',
        hidden : true
    },
    {
        text : 'Código',
        dataIndex : 'codigo',
        editor :
        {
            field :
            {
                allowBlank : false
            }
        }
    },
    {
        text : 'Nombre',
        dataIndex : 'nombre',
        flex : 1,
        editor :
        {
            field :
            {
                allowBlank : false
            }
        }
    },
    {
        text : 'Orden',
        dataIndex : 'orden',
        editor :
        {
            field :
            {
                allowBlank : false
            }
        }
    } ]
});
