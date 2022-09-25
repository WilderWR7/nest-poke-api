//puede llamarse tambien app.config.ts

export const EnvConfiguration =()=>({
    environmet: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: +process.env.PORT || 3002 //convertir int por que joi lo pasa a process.env.PORT como string
})