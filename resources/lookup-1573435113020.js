(function(window, undefined) {
  var dictionary = {
    "359d8fc3-0d39-4a6f-98f6-25ec5779bb16": "tela 2.2",
    "45519d59-991b-452a-a72d-5dc075dfb741": "tela 2.1",
    "25e64bd0-474a-4366-883e-da881cf74653": "tela 2.1.1.2.1",
    "b0251cc5-8f11-4fdb-a568-17e549eacba1": "tela 2.1.1.3",
    "ef32e9b4-8d22-464a-822e-3938fb2b4a8d": "tela 2.1.1.2",
    "40486e7e-ab06-40b3-a4fb-28615f05eb42": "tela 2.1.1.1",
    "52f37d44-d59d-4fb2-83a1-41e46e8ea61f": "tela 2",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "5c4ab7c4-e8c2-4730-9b34-1311330845c6": "tela 2.1.1",
    "641eb1b6-423b-4243-aae6-7fe91882d78f": "tela 2.2.1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);