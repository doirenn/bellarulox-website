
    const CONFIG = {
      whatsappNumber: "593984424836",
      contactEmail: "marianm@bellarulox.com",
      submitEndpoint: "",
      guiaUrl: "",
      hojaUrl: "",
      protocoloUrl: "/protocolo-uso-seguro/assets/protocolo-de-emergencia.pdf",
      gumroadUrl: "https://bellarulox.gumroad.com/l/protocolo-uso-seguro",
      telegramUrl: "https://t.me/bellarulox",
      instagramUrl: "https://www.instagram.com/bellarulox",
      precios: {
        auditoria: 120,
        kit: 15,
        entrenamiento: 100
      },
      sobreMi: "Marian Montilla (Bellarulox). Consultora de operaciones digitales con más de 10 años trabajando en línea con negocios.",
      correoPrivacidad: "marianm@bellarulox.com"
    };

    const QUESTIONS = [
      {
        id: 'R1',
        category: 'riesgo',
        title: '¿Con qué número y aplicación atiendes a tus clientes en WhatsApp?',
        help: 'La API oficial es la versión de pago de WhatsApp para empresas con más volumen. Se conecta desde el administrador de Meta o con una plataforma socia.',
        weight: 3,
        options: [
          { text: 'Con WhatsApp normal, en mi número personal', pts: 0 },
          { text: 'Con la app WhatsApp Business (gratuita) y un número del negocio', pts: 1 },
          { text: 'Con la API oficial, directa o con una plataforma socia', pts: 2, isApi: true },
          { text: 'No lo sé', pts: 0 }
        ],
        action: 'Define si seguirás con la app gratuita o pasarás a la API oficial (la versión de pago para empresas con más volumen), y usa un número exclusivo del negocio.'
      },
      {
        id: 'R2',
        category: 'riesgo',
        title: '¿Escribes a personas que nunca te han escrito ni te dieron permiso?',
        help: 'Por ejemplo, listas compradas, contactos copiados de otros grupos o números que conseguiste por otro medio.',
        weight: 5,
        options: [
          { text: 'Sí, con frecuencia', pts: 0, flag: 'frio' },
          { text: 'A veces', pts: 1 },
          { text: 'No, solo escribo a quienes me escribieron o aceptaron recibir mis mensajes', pts: 2 }
        ],
        action: 'Deja de escribir a personas que no te han escrito ni te dieron permiso. Si necesitas llegar a ellas, usa plantillas aprobadas por la API y solo con consentimiento.'
      },
      {
        id: 'R3',
        category: 'riesgo',
        title: 'Cuando le escribes a alguien que no te ha escrito en las últimas 24 horas, ¿cómo lo haces?',
        help: 'WhatsApp permite responder libremente durante 24 horas desde el último mensaje del cliente. Fuera de esa ventana, solo se puede escribir con plantillas aprobadas.',
        weight: 3,
        options: [
          { text: 'Respondo solo dentro de las 24 horas o uso plantillas aprobadas', pts: 2 },
          { text: 'Escribo manualmente a clientes antiguos, sin plantilla', pts: 1 },
          { text: 'Envío difusiones o mensajes masivos sin plantilla', pts: 0 },
          { text: 'No conozco esta regla', pts: 0 }
        ],
        action: 'Aprende la regla de las 24 horas: fuera de esa ventana solo se escribe con plantillas aprobadas, y se reinicia cada vez que el cliente te escribe.'
      },
      {
        id: 'R4',
        category: 'riesgo',
        title: '¿Guardas que cada persona aceptó recibir tus mensajes, y respetas cuando pide parar?',
        help: 'Se llama consentimiento (opt-in). La recomendación oficial es pedirlo por tipo de mensaje: pedidos, ofertas, recomendaciones.',
        weight: 4,
        options: [
          { text: 'Sí, queda registrado por tipo de mensaje y retiro de inmediato a quien pide parar', pts: 2 },
          { text: 'Respeto las bajas, pero no tengo registro del permiso', pts: 1 },
          { text: 'No tengo registro ni un proceso para las bajas', pts: 0 }
        ],
        action: 'Crea un registro de consentimiento (quién, cuándo y para qué tipo de mensajes) y un proceso para retirar a quien pide parar, dentro o fuera de WhatsApp.'
      },
      {
        id: 'R5',
        category: 'riesgo',
        title: '¿Tu negocio vende o promociona alguno de estos: alcohol, tabaco, salud o medicamentos, multinivel, préstamos, apuestas o citas?',
        help: 'Estos sectores están prohibidos o muy restringidos. Algunos se permiten solo en ciertos países, con licencias y por la API, nunca por la app WhatsApp Business.',
        weight: 3,
        options: [
          { text: 'No, ninguno de esos', pts: 2 },
          { text: 'Sí, pero con licencias y desde la API, en un país permitido', pts: 1 },
          { text: 'Sí, y lo hago desde la app o sin licencias', pts: 0, flag: 'regulado' },
          { text: 'No lo tengo claro', pts: 1 }
        ],
        action: 'Revisa si tu sector es regulado. Si lo es, solo se permite en ciertos países, con licencias y por la API, nunca por la app WhatsApp Business.'
      },
      {
        id: 'R6',
        category: 'riesgo',
        title: '¿Usas respuestas automáticas, un chatbot o inteligencia artificial para atender?',
        help: 'La política permite automatizar dentro de las 24 horas, siempre que el cliente tenga una salida clara hacia una persona: chat humano, teléfono, correo, web, visita o formulario.',
        weight: 2,
        options: [
          { text: 'No uso automatización', pts: 2 },
          { text: 'Sí, y el cliente puede pasar a una persona, un teléfono o un correo en cualquier momento', pts: 2 },
          { text: 'Sí, pero no hay una forma clara de hablar con una persona', pts: 0 }
        ],
        action: 'Agrega a tu automatización una salida clara hacia una persona: chat humano, teléfono, correo, web o formulario. Usa la IA para atender a tus clientes, no para ofrecer un asistente general.'
      },
      {
        id: 'R7',
        category: 'riesgo',
        title: '¿Usas una versión modificada de WhatsApp, una app de terceros para enviar mensajes o una herramienta que se conecta por código QR o WhatsApp Web?',
        help: 'Las Normas de WhatsApp no permiten los clientes no oficiales ni el envío masivo o automatizado que perjudique a WhatsApp o a sus usuarios. Una integración oficial se conecta desde el administrador de Meta, sin escanear un código QR.',
        weight: 5,
        options: [
          { text: 'No, uso solo la app oficial o una integración oficial de Meta', pts: 2 },
          { text: 'Uso una app de terceros para programar o enviar mensajes, o mi CRM se conecta por código QR o WhatsApp Web', pts: 0, flag: 'noficial' },
          { text: 'Uso una versión modificada de WhatsApp (como GB WhatsApp o WhatsApp Plus)', pts: 0, flag: 'noficial' },
          { text: 'No lo sé', pts: 1 }
        ],
        action: 'Vuelve a la app oficial y deja de usar versiones modificadas, programadores de mensajes de terceros y conexiones por código QR o WhatsApp Web. Si necesitas automatizar, hazlo con la API oficial o con una plataforma socia oficial.'
      },

      {
        id: 'C1',
        category: 'recuperacion',
        title: '¿Dónde tienes tu lista de clientes y citas fuera de WhatsApp?',
        help: 'No cuenta la copia de seguridad cifrada de WhatsApp ni el historial del chat. Si la cuenta se bloquea, el acceso a ellos depende de que WhatsApp levante la restricción.',
        weight: 5,
        options: [
          { text: 'En una hoja, un CRM o una agenda propia que se actualiza', pts: 2 },
          { text: 'Parcial: algunos clientes están en mi agenda o mi cuaderno', pts: 1 },
          { text: 'Solo dentro de WhatsApp o en su copia de seguridad', pts: 0, flag: 'personal_check' },
          { text: 'No tengo, o no lo sé', pts: 0, flag: 'personal_check' }
        ],
        action: 'Crea un respaldo de tus clientes y citas fuera de WhatsApp (hoja de cálculo o CRM) con nombre, teléfono, correo alterno y consentimiento.'
      },
      {
        id: 'C2',
        category: 'recuperacion',
        title: '¿Cada cuánto actualizas ese respaldo?',
        help: 'La frecuencia ideal depende de tu volumen de conversaciones. Te daremos una sugerencia en tu resultado.',
        weight: 2,
        options: [
          { text: 'De forma automática o a diario', pts: 2 },
          { text: 'Cada semana o cada mes', pts: 1 },
          { text: 'Nunca, o no lo sé', pts: 0 }
        ],
        action: 'Define una frecuencia de respaldo según tu volumen de conversaciones y ponla en tu calendario.'
      },
      {
        id: 'C3',
        category: 'recuperacion',
        title: 'Si WhatsApp deja de abrir a las 5 am y tienes citas hoy, ¿cómo avisas a tus clientes?',
        help: 'Piensa en un medio distinto a WhatsApp: llamada, SMS, correo, redes o Google Business.',
        weight: 5,
        options: [
          { text: 'Tengo un correo o teléfono de cada cliente y un mensaje de aviso ya escrito', pts: 2 },
          { text: 'Tengo medios alternos de algunos clientes, pero no de todos', pts: 1 },
          { text: 'No tendría cómo avisarles', pts: 0 }
        ],
        action: 'Escribe tus avisos de emergencia y reúne un medio alterno (correo, teléfono o SMS) de cada cliente con cita.'
      },
      {
        id: 'C4',
        category: 'recuperacion',
        title: '¿De quién y para qué es el número que usas para el negocio?',
        help: 'Un número exclusivo es más fácil de proteger y de recuperar.',
        weight: 4,
        options: [
          { text: 'Es una línea exclusiva para el negocio, a nombre de la empresa o mío', pts: 2 },
          { text: 'Es mi número personal, el mismo que uso en mi vida diaria', pts: 0, flag: 'personal' },
          { text: 'Es un número prestado o a nombre de otra persona', pts: 0 }
        ],
        action: 'Separa tu número personal del número del negocio. Una línea exclusiva reduce riesgos y facilita recuperarla.'
      },
      {
        id: 'C5',
        category: 'recuperacion',
        title: 'Si pierdes el celular o la SIM, ¿puedes recuperar ese número?',
        help: 'Aplica a SIM física y a eSIM. Una eSIM se transfiere a otro celular con un proceso de tu operadora.',
        weight: 3,
        options: [
          { text: 'Sí, la línea está a mi nombre y sé cómo reponer la SIM o transferir la eSIM', pts: 2 },
          { text: 'Creo que sí, pero nunca lo he probado', pts: 1 },
          { text: 'No, la línea es de otra persona o no sé cómo', pts: 0 }
        ],
        action: 'Confirma con tu operadora cómo recuperar la línea (SIM física o eSIM) y que esté a nombre de quien puede gestionarla.'
      },
      {
        id: 'C6',
        category: 'recuperacion',
        title: '¿Tienes protegida tu cuenta con verificación en dos pasos, un correo de recuperación y al menos dos administradores en Meta?',
        help: 'Con dos administradores, si uno pierde el acceso, el negocio no queda bloqueado.',
        weight: 3,
        options: [
          { text: 'Sí, las tres', pts: 2 },
          { text: 'Tengo una o dos de las tres', pts: 1 },
          { text: 'Ninguna, o no lo sé', pts: 0 }
        ],
        action: 'Activa la verificación en dos pasos, agrega un correo de recuperación y registra al menos dos administradores en Meta.'
      }
    ];

    const BLOCKED_CASES = [
      {
        id: 'restringida',
        title: 'Cuenta restringida',
        optText: 'El aviso dice que mi cuenta está restringida, o que podría restringirse pronto',
        content: `<h3>Cuenta restringida</h3>
          <p>Suele indicar señales de spam o de mensajes automáticos o masivos. Es distinto de un bloqueo.</p>
          <p>No hay que hacer nada especial: la restricción termina sola al pasar el tiempo indicado. Mientras tanto puedes seguir hablando con tus contactos previos.</p>
          <p>No intentes crear chats o grupos nuevos para esquivarla.</p>
          <p>Revisa tus prácticas: mensajes iguales a muchas personas, contactos que no te conocían y herramientas no oficiales.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>`
      },
      {
        id: 'temporal',
        title: 'Suspensión temporal',
        optText: 'Un aviso de suspensión temporal, con un contador de tiempo',
        content: `<h3>Suspensión temporal</h3>
          <p>Suele indicar que WhatsApp vio algo que pudo infringir sus normas. Que sea temporal no asegura que no vuelva a ocurrir.</p>
          <p>Espera a que termine el contador. No hay información oficial que indique que reinstalar la app ayude, así que evita hacerlo mientras tanto.</p>
          <p>Revisa si usas una versión no oficial de WhatsApp, una app de terceros para programar o enviar mensajes, o una herramienta que conecta por código QR. Si es así, vuelve a la app oficial: seguir con ellas puede llevar a una suspensión definitiva.</p>
          <p>Revisa qué pasó antes del aviso: mensajes iguales a muchas personas, contactos que no te conocían o personas que pudieron reportarte.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>`
      },
      {
        id: 'revision',
        title: 'Cuenta en revisión',
        optText: 'El aviso dice “Cuenta en revisión”',
        content: `<h3>Cuenta en revisión</h3>
          <p>WhatsApp está analizando la actividad asociada al número para comprobar que cumple sus condiciones. El resultado y el tiempo dependen de WhatsApp.</p>
          <p>Espera sin hacer cambios. No hagas varias solicitudes ni instales aplicaciones para “destrabar” la cuenta.</p>
          <p>Revisa tus prácticas mientras tanto: permiso de tus contactos, mensajes repetidos y apps no oficiales.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>`
      },
      {
        id: 'solicitar_revision',
        title: 'La cuenta no puede usar WhatsApp, con opción de revisión',
        optText: 'El aviso dice que la cuenta no puede usar WhatsApp y aparece el botón Solicitar revisión',
        content: `<h3>La cuenta no puede usar WhatsApp, con opción de revisión</h3>
          <p>Ese botón es el camino oficial. WhatsApp indica que la mayoría de las revisiones se resuelve en unas 24 horas, pero es una referencia, no una promesa, y no siempre se aprueba.</p>
          <p>Envía una sola solicitud de revisión desde ese botón, dentro de la app.</p>
          <p>Explica lo que pasó con honestidad y en pocas líneas. Abajo tienes un texto de ejemplo.</p>
          <p>Espera la respuesta. Mientras la cuenta esté bloqueada, no puedes acceder al historial ni a la copia de seguridad: la copia solo se recupera si se desbloquea ese mismo número.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>
          <p>Si te la reactivan, vuelve a verificar tu número en la app y corrige lo que pudo causar el aviso antes de volver a enviar mensajes.</p>
          
          <h4 style="margin-top:20px; font-weight:600;">Texto de ejemplo para la solicitud</h4>
          <p style="font-size:0.85rem; color:#555;">Cámbialo para que describa solo lo que es cierto en tu caso. Una sola solicitud bien explicada es mejor que varias. Cada solicitud revisa un solo número.</p>
          <div class="copy-box" id="sample-text-box">Hola, equipo de WhatsApp. Mi número es +[código de país y número]. Uso WhatsApp para [tipo de negocio] y atiendo a clientes que me escriben o que me dieron permiso. Si mi cuenta fue limitada por un error o por una práctica que no conocía, ya revisé la política de mensajes y la aplico. Les pido por favor que revisen mi caso. Gracias.</div>
          <button class="btn btn-secondary btn-small" id="btn-copy-sample">Copiar texto</button>`
      },
      {
        id: 'sin_revision',
        title: 'La cuenta no puede usar WhatsApp, sin opción de revisión',
        optText: 'El aviso dice que la cuenta no puede usar WhatsApp y no aparece ninguna opción de revisión',
        content: `<h3>La cuenta no puede usar WhatsApp, sin opción de revisión</h3>
          <p>WhatsApp indica que, si no aparece la opción de revisión, el bloqueo es definitivo y no se puede apelar. Escribir por otras vías o usar la cuenta de otra persona no cambia la decisión.</p>
          <p>Asume que tu atención no dependerá de esa cuenta. Activa tu plan B hoy: llamada directa y SMS a tus clientes actuales.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>
          <p>Antes de registrar otra cuenta de negocio, consulta. Los Términos de la app WhatsApp Business indican que, si terminan tu cuenta, no debes crear otra cuenta de negocio sin permiso escrito de WhatsApp.</p>
          <p>Si crees que hubo un error, los Términos prevén presentar una queja en el formulario oficial de contacto. El Centro de ayuda advierte que no acelera ni cambia la decisión, así que úsalo sin esperar un cambio.</p>
          <p>Si compras una línea nueva, revisa que el número no arrastre un bloqueo del dueño anterior.</p>`
      },
      {
        id: 'numero_nuevo',
        title: 'Número nuevo con aviso de bloqueo',
        optText: 'Compré o estrené un número y ya aparece bloqueado',
        content: `<h3>Número nuevo con aviso de bloqueo</h3>
          <p>Puede deberse a que el dueño anterior del número infringió las condiciones. No significa que tu uso haya causado el aviso.</p>
          <p>Pide la revisión con el botón Solicitar revisión, si aparece.</p>
          <p>Si se levanta, vuelve a verificar el número.</p>
          <p>Pide el historial de la línea a tu operadora cuando la compres o la actives, si es posible.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>`
      },
      {
        id: 'api_restriccion',
        title: 'Cuenta de la API con advertencia o restricción',
        optText: 'Uso la API y recibí una advertencia o restricción en Meta Business',
        content: `<h3>Cuenta de la API con advertencia o restricción</h3>
          <p>Según la página de aplicación de políticas para desarrolladores de Meta (actualizada el 21 de mayo de 2026), el proceso es gradual: advertencia, restricción de plantillas por 1 o 3 días, restricción total por 5, 7 o 30 días, bloqueo indefinido y baja definitiva. En casos graves la baja es inmediata.</p>
          <p>Entra a Business Support Home en Meta Business Suite (Todas las herramientas, Business Support Home, Resumen de la cuenta). El soporte de WhatsApp no atiende estos casos.</p>
          <p>Elige la infracción y pulsa Solicitar revisión. Meta indica que suele responder en 24 a 48 horas. Es una referencia, no una promesa.</p>
          <p>No todas las infracciones de spam se pueden apelar. En esos casos hay que esperar a que termine la restricción.</p>
          <p>Mantén al día los correos de todos los administradores del portafolio: ahí llegan los avisos.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>`
      },
      {
        id: 'otro_aviso',
        title: 'Primero, identifica el aviso',
        optText: 'No lo tengo claro, o veo otro aviso',
        content: `<h3>Primero, identifica el aviso</h3>
          <p>Los avisos cambian con el tiempo y según el tipo de cuenta, y cada uno lleva a pasos distintos.</p>
          <p>Toma una captura del aviso completo y guárdala fuera de WhatsApp.</p>
          <p>No reinstales ni hagas varias solicitudes mientras tanto.</p>
          <p><strong>No pagues a nadie que ofrezca recuperar tu cuenta. Solo WhatsApp puede reactivarla. Quien promete lo contrario suele buscar tu dinero o tus datos.</strong></p>
          <p>Puedes enviarme la captura con el botón de abajo para orientarte.</p>`
      }
    ];

    let appState = {
      step: 0,
      context: {
        businessName: '',
        newConvs: 'menos50',
        dailyAppointments: 0,
        stage: 'ninguna'
      },
      answers: {},
      lead: {
        name: '',
        email: '',
        phone: '',
        consent: false
      }
    };

    function loadSavedState() {
      try {
        const saved = localStorage.getItem('pus_state');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && parsed.answers) {
            appState.context = parsed.context || appState.context;
            appState.answers = parsed.answers || {};
          }
        }
      } catch (e) {
        console.error('Error loading state', e);
      }
    }

    function saveStateToLocal() {
      try {
        localStorage.setItem('pus_state', JSON.stringify({
          context: appState.context,
          answers: appState.answers
        }));
      } catch (e) {
        console.error('Error saving state', e);
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.price-kit').forEach(el => el.textContent = CONFIG.precios.kit);
      document.querySelectorAll('.price-entrenamiento').forEach(el => el.textContent = CONFIG.precios.entrenamiento);
      
      document.querySelectorAll('.modal-correo-privacidad').forEach(el => el.textContent = CONFIG.correoPrivacidad);
      if(CONFIG.sobreMi) {
        document.getElementById('sobre-mi-text').textContent = CONFIG.sobreMi;
      }

      const defaultWaMsg = encodeURIComponent("Hola Marian, vi el Protocolo de Uso Seguro y me gustaría que me ayudes con mi WhatsApp. Entiendo que nadie puede asegurar que WhatsApp no limite o bloquee una cuenta.");
      document.getElementById('btn-wa-contacto').href = `https://wa.me/${CONFIG.whatsappNumber}?text=${defaultWaMsg}`;

      document.querySelectorAll('.btn-wa-service').forEach(btn => {
        const sName = btn.getAttribute('data-service');
        const msg = encodeURIComponent(`Hola Marian, hice el test y me interesa ${sName}. Entiendo que nadie puede asegurar que WhatsApp no limite una cuenta.`);
        btn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
      });

      document.getElementById('btn-buy-kit').href = CONFIG.gumroadUrl || '#';

      loadSavedState();
      renderTestApp();
      renderBlockedSection();

      const openModal = document.getElementById('openPrivacyModal');
      const closeModal = document.getElementById('closePrivacyModal');
      const privacyModal = document.getElementById('privacyModal');

      openModal.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('active');
      });
      closeModal.addEventListener('click', () => privacyModal.classList.remove('active'));
    });

    function renderTestApp() {
      const appContainer = document.getElementById('test-app');
      
      if (appState.step === 0) {
        appContainer.innerHTML = `
          <h2 class="title-medium" style="margin-bottom: 12px;">Cuéntanos un poco de tu negocio</h2>
          <p style="font-size: 0.95rem; color: #2a2a2a; margin-bottom: 24px;">Estos datos no suman puntos. Sirven para ajustar tu recomendación de respaldo y tu simulacro.</p>
          
          <form id="context-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;" for="biz-name">Nombre de tu negocio (opcional)</label>
              <input class="field" type="text" id="biz-name" value="${appState.context.businessName}" placeholder="Ej. Calzados María" autocomplete="organization">
            </div>

            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;">¿Cuántas conversaciones nuevas recibes al mes?</label>
              <label class="radio-option">
                <input type="radio" name="newConvs" value="menos50" ${appState.context.newConvs === 'menos50' ? 'checked' : ''}>
                Menos de 50
              </label>
              <label class="radio-option">
                <input type="radio" name="newConvs" value="50a300" ${appState.context.newConvs === '50a300' ? 'checked' : ''}>
                Entre 50 y 300
              </label>
              <label class="radio-option">
                <input type="radio" name="newConvs" value="mas300" ${appState.context.newConvs === 'mas300' ? 'checked' : ''}>
                Más de 300
              </label>
            </div>

            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;" for="daily-appts">¿Cuántas citas, entregas o pedidos dependen de WhatsApp en un día normal?</label>
              <input class="field" type="number" id="daily-appts" min="0" value="${appState.context.dailyAppointments || 0}" style="max-width: 160px;">
            </div>

            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;">¿Tu cuenta de WhatsApp ha recibido algún aviso de restricción o bloqueo? (obligatorio)</label>
              <label class="radio-option">
                <input type="radio" name="stage" value="ninguna" ${appState.context.stage === 'ninguna' ? 'checked' : ''} required>
                No, nunca.
              </label>
              <label class="radio-option">
                <input type="radio" name="stage" value="temporal" ${appState.context.stage === 'temporal' ? 'checked' : ''}>
                Sí, una restricción o una suspensión temporal.
              </label>
              <label class="radio-option">
                <input type="radio" name="stage" value="permanente" ${appState.context.stage === 'permanente' ? 'checked' : ''}>
                Sí, un bloqueo permanente o sin opción de revisión.
              </label>
              <label class="radio-option">
                <input type="radio" name="stage" value="nose" ${appState.context.stage === 'nose' ? 'checked' : ''}>
                No lo sé.
              </label>
            </div>

            <div style="margin-top: 10px;">
              <button type="submit" class="btn btn-primary" style="width: 100%;">Comenzar el test</button>
            </div>
          </form>
        `;

        document.getElementById('context-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const form = e.target;
          appState.context.businessName = document.getElementById('biz-name').value.trim();
          appState.context.newConvs = form.querySelector('input[name="newConvs"]:checked').value;
          appState.context.dailyAppointments = parseInt(document.getElementById('daily-appts').value) || 0;
          appState.context.stage = form.querySelector('input[name="stage"]:checked').value;
          
          appState.step = 1;
          saveStateToLocal();
          renderTestApp();
        });

      } else if (appState.step >= 1 && appState.step <= QUESTIONS.length) {
        const qIndex = appState.step - 1;
        const q = QUESTIONS[qIndex];
        const partText = q.category === 'riesgo' ? '1 de 2: Riesgo de bloqueo' : '2 de 2: Capacidad de recuperación';
        const progressPct = Math.round((appState.step / QUESTIONS.length) * 100);

        appContainer.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: #2a2a2a;" aria-live="polite">
            <span>Parte ${partText}</span>
            <span>Pregunta ${appState.step} de ${QUESTIONS.length}</span>
          </div>

          <div class="progress-bar-bg" aria-hidden="true">
            <div class="progress-bar-fill" style="width: ${progressPct}%;"></div>
          </div>

          <h2 class="title-small" style="margin: 20px 0 8px;">${q.title}</h2>
          <p style="font-size: 1rem; color: #2a2a2a; margin-bottom: 24px;">${q.help}</p>

          <form id="question-form">
            ${q.options.map((opt, idx) => `
              <label class="radio-option">
                <input type="radio" name="qOpt" value="${idx}" ${appState.answers[q.id] === idx ? 'checked' : ''}>
                ${opt.text}
              </label>
            `).join('')}

            <div class="q-nav">
              <button type="button" class="btn btn-outline btn-small" id="btn-prev-q">Atrás</button>
              <button type="submit" class="btn btn-primary btn-small" id="btn-next-q" ${appState.answers[q.id] === undefined ? 'disabled' : ''}>Continuar</button>
            </div>
          </form>
        `;

        document.getElementById('btn-prev-q').addEventListener('click', () => {
          appState.step--;
          renderTestApp();
        });

        const questionForm = document.getElementById('question-form');
        const nextBtn = document.getElementById('btn-next-q');
        questionForm.querySelectorAll('input[name="qOpt"]').forEach(radio => {
          radio.addEventListener('change', () => { nextBtn.disabled = false; });
        });
        questionForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const chosen = questionForm.querySelector('input[name="qOpt"]:checked');
          if (!chosen) return;
          appState.answers[q.id] = parseInt(chosen.value);
          saveStateToLocal();
          appState.step++;
          renderTestApp();
        });

      } else if (appState.step === QUESTIONS.length + 1) {
        appContainer.innerHTML = `
          <h2 class="title-medium" style="margin-bottom: 12px;">Tu resultado está listo</h2>
          <p style="font-size: 0.95rem; color: #2a2a2a; margin-bottom: 24px;">Déjanos dónde enviártelo. Verás tus dos semáforos ahora mismo y recibirás una copia en tu correo.</p>

          <form id="lead-form" style="display: flex; flex-direction: column; gap: 16px;">
            <input type="text" name="website_hp" style="display:none;" tabindex="-1" autocomplete="off">

            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;" for="lead-name">Nombre</label>
              <input type="text" id="lead-name" required placeholder="Tu nombre" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;">
            </div>

            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;" for="lead-email">Correo electrónico</label>
              <input type="email" id="lead-email" required placeholder="tu@correo.com" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;">
            </div>

            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 6px;" for="lead-phone">WhatsApp (opcional, con código de país)</label>
              <input type="tel" id="lead-phone" placeholder="+593999999999" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px;">
            </div>

            <div style="margin-top: 8px;">
              <label style="display: flex; gap: 10px; font-size: 0.85rem; align-items: flex-start; cursor: pointer;">
                <input type="checkbox" id="lead-consent" required style="margin-top: 3px; accent-color: var(--c-fuchsia);">
                <span>Acepto que Marian Montilla (Bellarulox) me envíe mi resultado y contenido sobre WhatsApp para negocios. Puedo pedir que me retire cuando quiera.</span>
              </label>
            </div>

            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 16px;">
              <button type="submit" class="btn btn-primary">Ver mi resultado y recibir copia</button>
              <button type="button" class="btn btn-outline" id="btn-skip-lead">Ver mi resultado sin dejar mis datos</button>
            </div>
          </form>
        `;

        document.getElementById('lead-form').addEventListener('submit', (e) => {
          e.preventDefault();
          const hp = e.target.querySelector('input[name="website_hp"]').value;
          if (hp) return;

          appState.lead.name = document.getElementById('lead-name').value.trim();
          appState.lead.email = document.getElementById('lead-email').value.trim();
          appState.lead.phone = document.getElementById('lead-phone').value.trim();
          appState.lead.consent = document.getElementById('lead-consent').checked;

          if (CONFIG.submitEndpoint) {
            fetch(CONFIG.submitEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                context: appState.context,
                answers: appState.answers,
                lead: appState.lead,
                results: calculateResults()
              })
            }).catch(err => console.error('Error submitting form:', err));
          }

          appState.step++;
          renderTestApp();
        });

        document.getElementById('btn-skip-lead').addEventListener('click', () => {
          appState.step++;
          renderTestApp();
        });

      } else {
        renderResultsView(appContainer);
      }
    }

    function calculateResults() {
      const riesgoQuestions = QUESTIONS.filter(q => q.category === 'riesgo');
      const recQuestions = QUESTIONS.filter(q => q.category === 'recuperacion');

      let riesgoPts = 0;
      let recPts = 0;

      let flags = {
        noficial: false,
        frio: false,
        regulado: false,
        personal: false
      };

      let isR1Api = false;
      let c1Points = 0;

      riesgoQuestions.forEach(q => {
        const optIdx = appState.answers[q.id];
        if (optIdx !== undefined) {
          const opt = q.options[optIdx];
          riesgoPts += opt.pts;
          if (opt.isApi) isR1Api = true;
          if (opt.flag === 'frio') flags.frio = true;
          if (opt.flag === 'regulado') flags.regulado = true;
          if (opt.flag === 'noficial') flags.noficial = true;
        }
      });

      recQuestions.forEach(q => {
        const optIdx = appState.answers[q.id];
        if (optIdx !== undefined) {
          const opt = q.options[optIdx];
          recPts += opt.pts;
          if (q.id === 'C1') c1Points = opt.pts;
          if (opt.flag === 'personal') flags.personal = true;
        }
      });

      const maxRiesgo = riesgoQuestions.length * 2;
      const maxRec = recQuestions.length * 2;

      let riesgoPct = Math.round((riesgoPts / maxRiesgo) * 100);
      let recPct = Math.round((recPts / maxRec) * 100);

      let riesgoColor = riesgoPct >= 75 ? 'verde' : (riesgoPct >= 40 ? 'amarillo' : 'rojo');
      let recColor = recPct >= 75 ? 'verde' : (recPct >= 40 ? 'amarillo' : 'rojo');

      let forcedRedNotes = [];

      if (flags.noficial) {
        riesgoColor = 'rojo';
        forcedRedNotes.push("Se marcó en rojo porque las Normas de WhatsApp no permiten los clientes no oficiales ni los programadores de mensajes de terceros.");
      }
      if (flags.frio) {
        riesgoColor = 'rojo';
        forcedRedNotes.push("Se marcó en rojo porque escribir a personas sin permiso es una de las señales que más pesa para WhatsApp.");
      }
      if (flags.regulado && !isR1Api) {
        riesgoColor = 'rojo';
        forcedRedNotes.push("Se marcó en rojo porque los sectores regulados no se permiten en la app WhatsApp Business.");
      }
      if (flags.personal && c1Points === 0) {
        recColor = 'rojo';
        forcedRedNotes.push("Se marcó en rojo porque tu número es personal y no tienes un respaldo fuera de WhatsApp.");
      }

      return {
        riesgoPts, riesgoPct, riesgoColor,
        recPts, recPct, recColor,
        forcedRedNotes,
        flags
      };
    }

    function renderResultsView(container) {
      const res = calculateResults();
      const stage = appState.context.stage;

      let lowScoringQ = QUESTIONS.map(q => {
        const optIdx = appState.answers[q.id];
        const pts = optIdx !== undefined ? q.options[optIdx].pts : 0;
        return { ...q, userPts: pts };
      }).filter(q => q.userPts < 2);

      lowScoringQ.sort((a, b) => {
        if (a.userPts !== b.userPts) return a.userPts - b.userPts;
        return b.weight - a.weight;
      });

      const top3Actions = lowScoringQ.slice(0, 3);

      const N = appState.context.dailyAppointments;
      const c3OptIdx = appState.answers['C3'];
      const c3Pts = c3OptIdx !== undefined ? QUESTIONS.find(q => q.id === 'C3').options[c3OptIdx].pts : 0;
      const citaWord = N === 1 ? 'cita' : 'citas';

      let scenario5am = "";
      if (N === 0) {
        scenario5am = "Si tu cuenta se cae, tu respaldo y tus avisos de emergencia deciden qué tan rápido vuelves a atender.";
      } else if (c3Pts === 2) {
        scenario5am = `Con ${N} ${citaWord} en el día, ya tendrías cómo avisar a cada persona. Practica tu plan B una vez para medir cuánto tardarías.`;
      } else if (c3Pts === 1) {
        scenario5am = `Con ${N} ${citaWord} en el día, podrías avisar a algunas personas, pero no a todas. Las demás se quedarían esperando.`;
      } else {
        scenario5am = `Con ${N} ${citaWord} en el día, hoy no tendrías cómo avisar a ninguna por otro medio. Empieza por reunir un correo o un teléfono alterno de cada cliente con cita.`;
      }

      let freqText = "";
      if (appState.context.newConvs === 'menos50') freqText = "Cada semana, y después de cada cita o cliente nuevo si puedes.";
      else if (appState.context.newConvs === '50a300') freqText = "Cada día, al cerrar la jornada.";
      else freqText = "Automática y continua (por ejemplo, un CRM o una hoja que se actualice sola), con una revisión semanal.";

      const readRiesgo = {
        verde: "Tu forma de usar WhatsApp sigue las buenas prácticas que revisamos. Mantén el hábito de revisar la calidad de tus mensajes cada semana. Verde no significa que no puedan limitar tu cuenta: esa decisión es de WhatsApp.",
        amarillo: "Hay señales que WhatsApp puede leer como molestas para tus clientes. Corregirlas ahora es más sencillo que recuperar una cuenta.",
        rojo: "Hay prácticas que, según la política de WhatsApp, pueden llevar a una limitación o a un bloqueo. Conviene corregirlas primero."
      }[res.riesgoColor];

      const readRec = {
        verde: "Si WhatsApp deja de abrir, tu negocio puede avisar a sus clientes y seguir atendiendo. Esto protege a tu negocio, no a la cuenta.",
        amarillo: "Tienes parte del respaldo, pero hay clientes a los que hoy no sabrías cómo avisar.",
        rojo: "Hoy dependes de WhatsApp para todo. Si la cuenta se cae, no tendrías cómo contactar a tus clientes."
      }[res.recColor];

      let serviceTitle = "";
      let serviceBody = "";
      let serviceBtns = [];
      let extraLink = null;
      let serviceSuggestedName = "";

      if (stage === 'temporal') {
        serviceSuggestedName = "Acompañamiento después de un bloqueo temporal";
        serviceTitle = "Lo que te sugiere este resultado: acompañamiento después de un bloqueo temporal";
        
        let subFrases = [];
        if (res.flags.noficial) subFrases.push("Usas herramientas no oficiales, y eso es lo primero que conviene dejar.");
        if (res.flags.frio) subFrases.push("Escribir a personas sin permiso es lo primero que conviene corregir.");
        if (res.flags.regulado) subFrases.push("Tu sector tiene restricciones en la app WhatsApp Business: conviene revisarlas primero.");
        if (res.recColor === 'rojo') subFrases.push("Hoy no tendrías cómo avisar a tus clientes: empieza por tu plan B.");
        
        const frasesAdded = subFrases.slice(0, 2).join(" ");
        
        serviceBody = `Recibiste un aviso temporal y el test ayuda a ver qué pudo influir. ${frasesAdded} Que sea temporal no asegura que no vuelva a pasar ni que no pase a permanente. Este servicio identifica el aviso, corrige lo que pudo causarlo, arma un reinicio gradual de 14 días y activa tu plan B. 120 USD, con el kit incluido y 2 semanas de seguimiento. No desbloquea la cuenta: solo WhatsApp decide.`;
        serviceBtns = [{ text: "Quiero acompañamiento", service: "el acompañamiento después de un bloqueo temporal" }];
        extraLink = { text: "Mientras tanto, revisa qué hacer según tu aviso", href: "#bloqueo" };

      } else if (stage === 'permanente') {
        serviceSuggestedName = "Después de un bloqueo permanente";
        serviceTitle = "Lo que te sugiere este resultado: este caso está por definir";
        serviceBody = `Tu cuenta quedó bloqueada de forma definitiva y el test muestra qué conviene tener resuelto antes de volver. Qué servicio corresponde en este caso está [POR DEFINIR]. No prometo que una cuenta nueva quede libre de límites: eso lo decide Meta, y los Términos restringen crear otra cuenta de negocio tras una terminación.`;
        serviceBtns = [{ text: "Ver mensajes y citas", href: "/mensajes-y-citas/" }];
        extraLink = { text: "Mientras tanto, revisa qué hacer según tu aviso", href: "#bloqueo" };

      } else {
        if (res.riesgoColor === 'amarillo' || res.riesgoColor === 'rojo') {
          serviceSuggestedName = "Auditoría preventiva";
          serviceTitle = "Lo que te sugiere este resultado: una auditoría preventiva";
          serviceBody = `Tu cuenta no ha recibido avisos, pero el test encontró prácticas que pueden exponerla. Revisarlas ahora, antes de un aviso, es lo más sencillo. La Auditoría preventiva revisa tu cuenta, tus envíos y tu configuración en Meta, y te deja un informe por escrito y tu plan B listo. 120 USD, con el kit incluido y 2 semanas de seguimiento. Ningún servicio puede asegurar que WhatsApp no limite una cuenta.`;
          serviceBtns = [{ text: "Quiero la Auditoría preventiva", service: "Auditoría preventiva" }];
        } else if (res.riesgoColor === 'verde' && res.recColor !== 'verde') {
          serviceSuggestedName = "Auditoría preventiva";
          serviceTitle = "Lo que te sugiere este resultado: tener un plan B";
          serviceBody = `Tu forma de escribir sigue buenas prácticas, pero hoy tu negocio dependería de WhatsApp si la cuenta fallara. La Auditoría preventiva (120 USD) incluye tu plan B completado: hoja de contactos, avisos de emergencia y protocolo. Si prefieres hacerlo tú, el kit ($${CONFIG.precios.kit} USD) trae las mismas piezas. Verde no significa que no puedan limitar tu cuenta.`;
          serviceBtns = [
            { text: "Quiero la Auditoría preventiva", service: "Auditoría preventiva" },
            { text: "Ver el kit", href: "#kit" }
          ];
        } else {
          serviceSuggestedName = "Kit Protocolo de Uso Seguro";
          serviceTitle = "Tu resultado es sólido";
          serviceBody = `Tu forma de usar WhatsApp y tu plan B están bien encaminados. No necesitas un servicio para empezar: el kit ($${CONFIG.precios.kit} USD) te ayuda a mantenerlo. Si quieres una mirada externa, la Auditoría preventiva (120 USD) revisa lo que el test no puede ver, como tu configuración en Meta. Verde no significa que no puedan limitar tu cuenta.`;
          serviceBtns = [{ text: "Ver el kit", href: "#kit" }];
        }

        if (stage === 'nose') {
          extraLink = { text: "Si ya recibiste un aviso, revisa qué hacer", href: "#bloqueo" };
        }
      }

      const bizDisplay = appState.context.businessName || "No especificado";
      const waResultMsg = encodeURIComponent(`Hola Marian, hice el test del Protocolo de Uso Seguro. Riesgo de bloqueo: ${res.riesgoColor} (${res.riesgoPct}%). Capacidad de recuperación: ${res.recColor} (${res.recPct}%). Mi negocio: ${bizDisplay}. Etapa: ${stage}. Me interesa: ${serviceSuggestedName}.`);

      container.innerHTML = `
        <div id="test-result-display" aria-live="polite">
          <h2 class="title-medium text-center" style="margin-bottom: 24px;">Tu resultado</h2>

          <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 30px;">
            
            <div class="traffic-light-card">
              <div class="traffic-light-svg" aria-hidden="true">
                <div class="light red ${res.riesgoColor === 'rojo' ? 'active' : ''}"></div>
                <div class="light amber ${res.riesgoColor === 'amarillo' ? 'active' : ''}"></div>
                <div class="light green ${res.riesgoColor === 'verde' ? 'active' : ''}"></div>
              </div>
              <div>
                <h3 class="title-small" style="margin: 0 0 6px;">Riesgo de bloqueo: <span style="text-transform: capitalize;">${res.riesgoColor}</span> (${res.riesgoPct}%)</h3>
                <p style="font-size: 0.9rem;">${readRiesgo}</p>
              </div>
            </div>

            <div class="traffic-light-card">
              <div class="traffic-light-svg" aria-hidden="true">
                <div class="light red ${res.recColor === 'rojo' ? 'active' : ''}"></div>
                <div class="light amber ${res.recColor === 'amarillo' ? 'active' : ''}"></div>
                <div class="light green ${res.recColor === 'verde' ? 'active' : ''}"></div>
              </div>
              <div>
                <h3 class="title-small" style="margin: 0 0 6px;">Capacidad de recuperación: <span style="text-transform: capitalize;">${res.recColor}</span> (${res.recPct}%)</h3>
                <p style="font-size: 0.9rem;">${readRec}</p>
              </div>
            </div>

          </div>

          ${res.forcedRedNotes.length > 0 ? `
            <div class="callout-box" style="margin-bottom: 24px; background: #fbe9e7;">
              <h4 style="font-weight: 600; color: var(--c-red); margin-bottom: 6px;">Atención en tu resultado:</h4>
              <ul style="font-size: 0.875rem; padding-left: 18px;">
                ${res.forcedRedNotes.map(n => `<li>${n}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <div style="background: var(--c-paper); padding: 24px; border-radius: 12px; margin-bottom: 24px; border: 1px solid #eee;">
            <h3 class="title-small" style="margin-bottom: 16px;">Tus acciones más importantes</h3>
            ${top3Actions.length > 0 ? `
              <ul style="padding-left: 20px; font-size: 0.95rem; line-height: 1.7;">
                ${top3Actions.map(act => `<li>${act.action}</li>`).join('')}
              </ul>
            ` : `<p style="font-size: 0.95rem;">¡Excelente! No tienes acciones críticas prioritarias pendientes en este momento.</p>`}
          </div>

          <div style="background: var(--c-bone); padding: 20px; border-radius: 14px; margin-bottom: 30px;">
            <h3 class="title-small" style="margin-bottom: 8px;">Tu escenario de las 5 am</h3>
            <p style="font-size: 0.95rem; margin-bottom: 12px;">${scenario5am}</p>
            <p style="font-size: 0.85rem; color: #2a2a2a;"><strong>Frecuencia de respaldo sugerida para tu volumen:</strong> ${freqText}</p>
          </div>

          <div style="border: 2px solid var(--c-fuchsia); padding: 28px; border-radius: 12px; margin-bottom: 30px; background: #ffffff;">
            <h3 class="title-small" style="color: var(--c-fuchsia); margin-bottom: 12px;">${serviceTitle}</h3>
            <p style="font-size: 0.95rem; margin-bottom: 20px;">${serviceBody}</p>
            <div class="offer-actions">
              ${serviceBtns.map(b => {
                if (b.href) {
                  return `<a href="${b.href}" class="btn btn-secondary btn-small">${b.text}</a>`;
                } else {
                  const waMsg = encodeURIComponent(`Hola Marian, hice el test y me interesa ${b.service}. Entiendo que nadie puede asegurar que WhatsApp no limite una cuenta.`);
                  return `<a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" class="btn btn-primary btn-small">${b.text}</a>`;
                }
              }).join('')}
              <a href="${CONFIG.telegramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-small">Telegram</a>
              <a href="${CONFIG.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-small">Instagram</a>
              ${extraLink ? `<a href="${extraLink.href}" style="font-size: 0.875rem; color: var(--c-indigo); text-decoration: underline;">${extraLink.text}</a>` : ''}
            </div>
          </div>

          <p style="font-size: 0.875rem; color: #2a2a2a; margin-bottom: 30px;">
            <strong>Servicio de lista:</strong> auditoría de WhatsApp y asesoría para verificar en Meta, 120 USD. La aprobación depende de Meta. El caso de un bloqueo permanente está [POR DEFINIR]. El kit cuesta $${CONFIG.precios.kit} USD. Si Meta te pide un sitio con dominio propio, también puedo ayudarte (se cotiza aparte). <a href="/mensajes-y-citas/" style="color: var(--c-indigo); text-decoration: underline;">Ver mensajes y citas</a>.
          </p>

          <h3 class="title-small" style="margin-bottom: 16px;">Tus siguientes pasos</h3>
          <div style="background: #fff; border: 1px solid var(--c-line); padding: 18px 20px; border-radius: 10px; margin-bottom: 30px;">
            <h4 style="font-size: 1rem; font-weight: 600; margin-bottom: 8px;">Kit Protocolo de Uso Seguro</h4>
            <p style="font-size: 0.9rem; color: #2a2a2a; margin: 0 0 12px;">Incluye la guía rápida, la hoja de contactos y el protocolo de emergencia.</p>
            <ul style="margin: 0 0 16px; padding-left: 18px; font-size: 0.875rem; line-height: 1.55; color: #2a2a2a;">
              <li>Guía rápida: revisión de 20 puntos, plan B y qué hacer si te bloquean.</li>
              <li>Hoja de contactos: tus clientes y citas fuera de WhatsApp, con botones para llamar y SMS.</li>
              <li>Protocolo de emergencia: una página para imprimir y completar.</li>
            </ul>
            <a href="${CONFIG.gumroadUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-small">Conseguir el kit</a>
          </div>

          <div class="no-print offer-actions offer-actions-stack">
            <a href="https://wa.me/${CONFIG.whatsappNumber}?text=${waResultMsg}" target="_blank" class="btn btn-primary btn-small">Enviar mi resultado a Marian por WhatsApp</a>
            <a href="${CONFIG.telegramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-small">Enviar por Telegram</a>
            <a href="${CONFIG.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-small">Escribir por Instagram</a>
            <button type="button" class="btn btn-outline btn-small" id="btn-restart-test">Repetir el test</button>
          </div>

          <div id="nadie-promete-container"></div>
        </div>
      `;

      const tpl = document.getElementById('tpl-nadie-promete');
      document.getElementById('nadie-promete-container').appendChild(tpl.content.cloneNode(true));

      document.getElementById('btn-restart-test').addEventListener('click', () => {
        appState.step = 0;
        appState.answers = {};
        saveStateToLocal();
        renderTestApp();
      });
    }

    function renderBlockedSection() {
      const listContainer = document.getElementById('blocked-options-list');

      listContainer.innerHTML = BLOCKED_CASES.map(c => `
        <article class="blocked-option" data-id="${c.id}">
          <button type="button" aria-expanded="false">${c.optText}</button>
          <div class="blocked-answer" hidden></div>
        </article>
      `).join('');

      const options = listContainer.querySelectorAll('.blocked-option');
      options.forEach(opt => {
        opt.querySelector('button').addEventListener('click', () => {
          const already = opt.classList.contains('selected');
          options.forEach(o => {
            o.classList.remove('selected');
            o.querySelector('button').setAttribute('aria-expanded', 'false');
            o.querySelector('.blocked-answer').hidden = true;
          });
          if (already) return;

          const found = BLOCKED_CASES.find(c => c.id === opt.getAttribute('data-id'));
          if (!found) return;

          opt.classList.add('selected');
          opt.querySelector('button').setAttribute('aria-expanded', 'true');
          const answer = opt.querySelector('.blocked-answer');
          answer.hidden = false;
          answer.innerHTML = found.content;

          const btnCopy = answer.querySelector('#btn-copy-sample');
          if (btnCopy) {
            btnCopy.addEventListener('click', () => {
              const text = answer.querySelector('#sample-text-box').innerText;
              navigator.clipboard.writeText(text).then(() => {
                btnCopy.textContent = "¡Copiado!";
                setTimeout(() => btnCopy.textContent = "Copiar texto", 2000);
              });
            });
          }

          const waBtn = document.getElementById('btn-wa-bloqueo');
          const msg = encodeURIComponent(`Hola Marian, mi WhatsApp está bloqueado y quiero acompañamiento con la solicitud de revisión. Aviso que veo: ${found.optText}. Entiendo que nadie puede asegurar que WhatsApp lo reactive.`);
          waBtn.href = `https://wa.me/${CONFIG.whatsappNumber}?text=${msg}`;
        });
      });
    }
  