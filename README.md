# Automated Workflow Engine API

API REST para ejecución de flujos automatizados definidos en JSON, con acciones y condiciones simuladas.

## 🧠 Descripción
El sistema interpreta workflows dinámicos y ejecuta pasos secuenciales, permitiendo orquestar procesos con lógica condicional y trazabilidad completa.

## 🚀 Características
- Ejecución de workflows por JSON
- Acciones simuladas (log, notify, delay)
- Condiciones y branching
- Arquitectura por capas
- API REST extensible

## 🛠️ Tecnologías
- Node.js
- Express
- JavaScript
- Git / GitHub

## 📦 Endpoint

### Ejecutar workflow
**POST** `/api/workflows/execute`

#### Request
```json
{
  "workflowName": "support-flow",
  "steps": [
    { "type": "log", "message": "Request received" },
    { "type": "notify", "channel": "email" },
    { "type": "delay", "ms": 300 }
  ]
}
```
### Response

```json
{
  "workflow": "support-flow",
  "status": "completed",
  "logs": ["Request received"],
  "notifications": ["email"],
  "executedSteps": 3
}
```
## Ejecución local

npm install
npm run dev

## 🎯 Enfoque

Proyecto orientado a automatización y orquestación de procesos, base para sistemas de IA y plataformas de workflows.

## 👤 Autor

**Maiky Andres Cardona Londoño**
