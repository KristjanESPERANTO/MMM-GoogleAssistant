/**  with-MMM-Memo.js   **/
/**  version: 13/09/20 **/
/**  @bugsounet  **/
/**  It translation : @Mirco **/

var recipe = {
  transcriptionHooks: {
    MEMO_ADD_FR: {
      pattern: "ajoute vers (.*)",
      command: "MEMO_ADD"
    },
    MEMO_DEL_FR: {
      pattern: "supprime (.*)",
      command: "MEMO_DEL"
    },
    MEMO_CLEAN_FR: {
      pattern: "efface (.*)",
      command: "MEMO_CLEAN"
    },
    MEMO_DISPLAY_FR: {
      pattern: "affiche (.*)",
      command: "MEMO_DISPLAY"
    },
    MEMO_WARNING_FR: {
      pattern: "ajoute important sur (.*)",
      command: "MEMO_WARN"
    },
    MEMO_ADD_IT: {
      pattern: "aggiungi alla lista (.*)",
      command: "MEMO_ADD"
    },
    MEMO_DEL_IT: {
      pattern: "Elimina dalla lista (.*)",
      command: "MEMO_DEL"
    },
    MEMO_CLEAN_IT: {
      pattern: "pulisci la lista (.*)",
      command: "MEMO_CLEAN"
    },
    MEMO_DISPLAY_IT: {
      pattern: "visualizzo la lista (.*)",
      command: "MEMO_DISPLAY"
    },
    MEMO_WARNING_IT: {
      pattern: "Aggiungi segnale di priorità (.*)",
      command: "MEMO_WARN"
    },
    MEMO_ADD_EN: {
      pattern: "add to (.*)",
      command: "MEMO_ADD"
    },
    MEMO_DEL_EN: {
      pattern: "delete on (.*)",
      command: "MEMO_DEL"
    },
    MEMO_CLEAN_EN: {
      pattern: "clean (.*)",
      command: "MEMO_CLEAN"
    },
    MEMO_DISPLAY_EN: {
      pattern: "display (.*)",
      command: "MEMO_DISPLAY"
    },
    MEMO_WARNING_EN: {
      pattern: "warning add to (.*)",
      command: "MEMO_WARN"
    }
  },
  commands: {
    MEMO_ADD: {
      shellExec: {
        exec: (params) => {
          var memoTitle = params[1].split(" ")[0];
          var item = params[1].split(" ").slice(1).join(" ");
          if (!memoTitle || !item) return null;
          return `curl -G -v 'http://127.0.0.1:8080/AddMemo?memoTitle=${memoTitle}' --data-urlencode 'item=${item}' --data-urlencode 'level=INFO'`;
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    MEMO_DEL: {
      shellExec: {
        exec: (params) => {
          var memoTitle = params[1].split(" ")[0];
          var item = params[1].split(" ").slice(1).join(" ");
          if (!memoTitle || !item) return null;
          return `curl -G -v 'http://127.0.0.1:8080/RemoveMemo?memoTitle=${memoTitle}' --data-urlencode 'item=${item}'`;
        }
      },
      soundExec: {
        chime: "close"
      }
    },
    MEMO_CLEAN: {
      shellExec: {
        exec: (params) => {
          var memoTitle = params[1].split(" ")[0];
          if (!memoTitle) return null;
          return `curl -G -v 'http://127.0.0.1:8080/RemoveMemo?memoTitle=${memoTitle}' --data-urlencode 'item=ALL'`;
        }
      },
      soundExec: {
        chime: "close"
      }
    },
    MEMO_DISPLAY: {
      shellExec: {
        exec: (params) => {
          var memoTitle = params[1].split(" ")[0];
          var item = params[1].split(" ").slice(1).join(" ");
          if (!memoTitle || !item) return null;
          return `curl -G -v 'http://127.0.0.1:8080/DisplayMemo?memoTitle=${memoTitle}' --data-urlencode 'item=ALL'`;
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    MEMO_WARN: {
      shellExec: {
        exec: (params) => {
          var memoTitle = params[1].split(" ")[0];
          var item = params[1].split(" ").slice(1).join(" ");
          if (!memoTitle || !item) return null;
          return `curl -G -v 'http://127.0.0.1:8080/AddMemo?memoTitle=${memoTitle}' --data-urlencode 'item=${item}' --data-urlencode 'level=WARNING'`;
        }
      },
      soundExec: {
        chime: "open"
      }
    },
    TELBOT_MEMO: {
      moduleExec: {
        module: ["MMM-GoogleAssistant"],
        exec: (module) => {
          module.telegramMemoADD = function (command, handler) {
            var memoTitle = handler.args ? handler.args.split(" ")[0] : null;
            var item = handler.args ? handler.args.split(" ").slice(1).join(" ") : null;
            var helpMSG = null;
            var sendMSG = null;
            if (config.language === "fr") {
              helpMSG = "/MemoADD <nom du memo> <choses à ajouter à la liste>";
              sendMSG = `Je vais ajouter à votre memo ${memoTitle}: ${item}`;
            }
            else if (config.language === "it") {
              helpMSG = "/MemoADD <nome memo> <oggetto da aggiungere>";
              sendMSG = `Ho aggiunto a ${memoTitle}: ${item}`;
            }
            else { // default en
              helpMSG = "/MemoADD <memo> <something to ADD>";
              sendMSG = `I will add to your ${memoTitle} memo: ${item}`;
            }
            if (!memoTitle || !item) return handler.reply("TEXT", helpMSG);
            var commands = `curl -G -v 'http://127.0.0.1:8080/AddMemo?memoTitle=${memoTitle}' --data-urlencode 'item=${item}' --data-urlencode 'level=INFO'`;
            module.sendSocketNotification("SHELLEXEC", { command: commands });
            handler.reply("TEXT", sendMSG);
          };
          module.telegramMemoDEL = function (command, handler) {
            var memoTitle = handler.args ? handler.args.split(" ")[0] : null;
            var item = handler.args ? handler.args.split(" ").slice(1).join(" ") : null;
            var helpMSG = null;
            var sendMSG = null;
            if (config.language === "fr") {
              helpMSG = "/MemoDEL <nom du memo> <numéro de la liste>";
              sendMSG = `Je vais supprimer de votre memo ${memoTitle} la ligne numero: ${item}`;
            }
            else if (config.language === "it") {
              helpMSG = "/MemoDEL <nome memo> <numero da cancellare>";
              sendMSG = `Ho cancellato da ${memoTitle} il numero: ${item}`;
            }
            else { // default en
              helpMSG = "/MemoDEL <memo name> <number to DEL>";
              sendMSG = `I will delete from your ${memoTitle} memo line number: ${item}`;
            }
            if (!memoTitle || !item) return handler.reply("TEXT", helpMSG);
            var commands = `curl -G -v 'http://127.0.0.1:8080/RemoveMemo?memoTitle=${memoTitle}' --data-urlencode 'item=${item}'`;
            module.sendSocketNotification("SHELLEXEC", { command: commands });
            handler.reply("TEXT", sendMSG);
          };
          module.telegramMemoCLEAN = function (command, handler) {
            var memoTitle = handler.args ? handler.args.split(" ")[0] : null;
            var helpMSG = null;
            var sendMSG = null;
            if (config.language === "fr") {
              helpMSG = "/MemoCLEAN <nom du memo>";
              sendMSG = `Je vais nettoyer votre memo: ${memoTitle}`;
            }
            else if (config.language === "it") {
              helpMSG = "/MemoCLEAN <nome memo>";
              sendMSG = `Ho cancellato il tuo memo: ${memoTitle}`;
            }
            else { // default en
              helpMSG = "/MemoCLEAN <memo name>";
              sendMSG = `I will clean up your memo: ${memoTitle}`;
            }
            if (!memoTitle) return handler.reply("TEXT", helpMSG);
            var commands = `curl -G -v 'http://127.0.0.1:8080/RemoveMemo?memoTitle=${memoTitle}' --data-urlencode 'item=ALL'`;
            module.sendSocketNotification("SHELLEXEC", { command: commands });
            handler.reply("TEXT", sendMSG);
          };
          module.telegramMemoDISPLAY = function (command, handler) {
            var memoTitle = handler.args ? handler.args.split(" ")[0] : null;
            var helpMSG = null;
            var sendMSG = null;
            if (config.language === "fr") {
              helpMSG = "/MemoDISPLAY <nom du memo>";
              sendMSG = `Je vous montre votre memo ${memoTitle}`;
            }
            else if (config.language === "it") {
              helpMSG = "/MemoDISPLAY <nome memo>";
              sendMSG = `Ho aggiunto a ${memoTitle}`;
            }
            else { // default en
              helpMSG = "/MemoDISPLAY <memo>";
              sendMSG = `I show your ${memoTitle} memo`;
            }
            if (!memoTitle) return handler.reply("TEXT", helpMSG);
            var commands = `curl -G -v 'http://127.0.0.1:8080/DisplayMemo?memoTitle=${memoTitle}' --data-urlencode 'item=ALL'`;
            module.sendSocketNotification("SHELLEXEC", { command: commands });
            handler.reply("TEXT", sendMSG);
          };
          module.telegramMemoWARN = function (command, handler) {
            var memoTitle = handler.args ? handler.args.split(" ")[0] : null;
            var item = handler.args ? handler.args.split(" ").slice(1).join(" ") : null;
            var helpMSG = null;
            var sendMSG = null;
            if (config.language === "fr") {
              helpMSG = "/MemoWARN <nom du memo> <important a ajouter>";
              sendMSG = `J'ajoute la note importante à votre memo ${memoTitle}: ${item}`;
            }
            else if (config.language === "it") {
              helpMSG = "/MemoWARN <nome memo> <oggetto da aggiungere>";
              sendMSG = `Ho aggiunto il segnale di priorità${memoTitle}: ${item}`;
            }
            else { // default en
              helpMSG = "/MemoWARN <memo> <warning to ADD>";
              sendMSG = `I will add this warning to your ${memoTitle} memo: ${item}`;
            }
            if (!memoTitle || !item) return handler.reply("TEXT", helpMSG);
            var commands = `curl -G -v 'http://127.0.0.1:8080/AddMemo?memoTitle=${memoTitle}' --data-urlencode 'item=${item}' --data-urlencode 'level=WARNING'`;
            module.sendSocketNotification("SHELLEXEC", { command: commands });
            handler.reply("TEXT", sendMSG);
          };
          module.sendNotification("TELBOT_REGISTER_COMMAND", {
            command: "MemoADD",
            callback: "telegramMemoADD",
            description: "MMM-Memo ADD"
          });
          module.sendNotification("TELBOT_REGISTER_COMMAND", {
            command: "MemoDEL",
            callback: "telegramMemoDEL",
            description: "MMM-Memo DEL"
          });
          module.sendNotification("TELBOT_REGISTER_COMMAND", {
            command: "MemoCLEAN",
            callback: "telegramMemoCLEAN",
            description: "MMM-Memo CLEAN"
          });
          module.sendNotification("TELBOT_REGISTER_COMMAND", {
            command: "MemoDISPLAY",
            callback: "telegramMemoDISPLAY",
            description: "MMM-Memo DISPLAY"
          });
          module.sendNotification("TELBOT_REGISTER_COMMAND", {
            command: "MemoWARN",
            callback: "telegramMemoWARN",
            description: "MMM-Memo WARNING"
          });
        }
      }
    }
  },
  plugins: {
    onReady: "TELBOT_MEMO"
  }
};
exports.recipe = recipe;
