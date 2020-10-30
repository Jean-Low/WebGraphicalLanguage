//Code based on https://github.com/mdn/webgl-examples
//Part2:
//Read a .pto file with the state of Sao Paulo height map and make a object that represents its topology.
//We aim to change the model to a pyramid and rotate it only on the Y axis
//WE (Jean and Paulo) Added a Comment line "MOD-" before any code section we changed.
//leaving the modified section commented with an "OLD" label before.
//On part 2 (and onwards), we required bigger changes so we did not left the OLD code on the file as it would make the file to large.

//MOD- Mudamos o nome do rotation
var triRotation = 0.0;
//OLD
//var cubeRotation = 0.0;

main();

//
// Start here
//
function Get_high() {
  console.log("high");
  //MOD2- Reading SP.pto file:
  //Tentei de tudo para ler o arquivo, Javascript me odeia e eu odeio webdev em geral...
  //Como ja perdi horas aqui vou apenas colocar o arquivo aqui como uma string ja que ler um arquivo em js n eh o foco da entrega
  //e dps tentar arrumar quando tempo n for um problema (ou com ajuda do professor)

  //Essa funcao vai criar um arquivo similar a um File em outras linguagens q fazem o menor sentido ou tem uma comunidade q nao se baseia
  //em todo mundo te mandando transformar seu script unico e bonito em um projeto node.

  /*
  varias tentativas
  /*var file = new File(["abobora"], "SP.pto", {
    type: "text/plain",
  });
  /*
  var file_selection = document.getElementById("SP.pto")

  var file = file_selection.file

  var file_reader = new FileReader();

  file_reader.onload = reader => {
    console.log("on load");
    console.log(reader);
    rest(reader.target.result)
  }

  file_reader.readAsText(file);

  console.log(file);

*/

//Eu, Jean, disse que seria simples...
//Copiando o file da topologia para uma string na mao:
  var file = String.raw`-18.1523  -25.9872@
  -43.1033  -53.9388@
  66   48 @
  485  533  531  544  692  707  627  627  629  721  855  892  788  780  841  795  775  829  903  838  749  736  736  749  766  766  827  832  775  919  660  205  141   67    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  459  431  422  512  625  642  549  549  649  734  766  758  773  899 1049 1021  895  814  867  849  762  769  769  762  799  810  780  817  882  960  943  509   94   20    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  366  357  385  457  520  551  538  544  605  660  701  732  858 1010 1123 1184 1132 1041 1030  904  773  829  829  784  843  904  880  947 1028 1028  847  512  231   46    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  276  313  329  372  444  472  483  531  588  690  701  723  962 1115 1078 1056 1056 1056  980  838  845  949  943  893  860  856  866  875  895  884  854  750  396   67    6    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  311  381  398  429  472  498  564  620  659  725  710  683  877 1015  949  986  976  958  891  827  869  867  827  762  818  958  928  904  964  899  626  301  258  202   61   13    2    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  446  487  522  548  583  672  670  696  764  752  739  751  821  867  873  932  867  773  753  756  775  760  762  775  888  919  804  828  969  991  925  849  576  303  216  117   26    6   53   53    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  470  575  636  642  701  760  734  728  667  605  628  707  733  779  806  749  747  813  773  718  762  747  764  862  929  792  692  726  796  959  980  914  817  720  588  289  102   41  328  328    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  453  538  601  647  680  622  537  510  547  660  817  828  832  871  776  660  649  649  660  736  762  747  790  931 1025  986  767  528  512  709  851  841  633  442  442  358  163   26    2    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  418  468  538  580  538  411  374  461  533  594  675  739  759  767  664  588  605  620  696  760  760  747  862 1030 1054 1043 1001  738  417  375  447  402  319  334  330  203  133   87   17    4   10    8    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  360  432  460  473  458  399  420  486  533  594  601  576  534  599  614  544  579  673  750  745  741  743  813  970 1056  991 1056 1063  684  393  433  585  449  260  233  160  109   65   39   41   85   69    6    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  318  360  377  379  364  330  395  481  546  596  540  455  440  531  547  512  571  592  673  727  697  720  761  849  980  980  980 1018  962  793  781  906  700  503  503  356  163  106   98  109  137  126   52    2    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  305  320  351  366  353  392  482  548  631  601  488  442  427  508  521  470  518  589  694  697  666  737  835  894  894  894  888  868  941  960  881  841  788  788  788  696  472  237  154  147  149  163  110   30   16   12    8    6    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0@
  295  312  342  362  368  370  436  618  658  549  475  430  421  434  436  463  541  670  739  673  650  666  706  746  742  742  700  660  702  744  746  746  750  750  748  748  754  524  336  382  306  304  308  211  205  134   69   56    6    0   10   51   41    0    0    0    0    0    0    0    0    0    0    0    0    0@
  231  263  304  351  401  420  420  485  565  532  392  342  373  385  406  509  686  754  672  690  753  666  636  628  599  608  592  590  608  623  638  640  667  664  653  655  701  752  818  878  822  811  837  799  747  456  207  207  141   91  167  432  345   46    6    0    0    0    0    0    0    0    0    0    0    0@
  244  288  392  465  533  563  567  550  458  411  354  290  324  418  495  577  680  675  563  690  950  814  604  545  531  588  573  564  594  610  625  638  636  623  636  651  695  682  678  816  896  922  924  836  757  759  766  766  768  706  770  752  600  340   46    0    0    0    0    0    0    0    0    0    0    0@
  246  270  354  494  515  445  470  445  358  301  280  306  370  467  630  752  640  499  453  518  674  641  556  512  518  555  537  564  594  606  621  623  610  614  620  631  651  651  623  659  763  859  878  823  823  838  792  788  802  828  815  700  577  348  119   50   26    6    0    0    0    0    0    0    0    0@
  261  246  270  325  380  354  341  354  301  280  332  417  493  520  560  676  636  482  431  512  584  539  495  470  512  588  566  566  596  581  592  608  610  636  680  667  623  621  606  579  661  783  838  827  831  854  804  754  744  752  768  798  869  848  649  430  242   79   30   30   10    0    0    0    0    0@
  276  259  244  259  274  274  276  278  286  336  417  453  421  421  518  588  590  535  451  467  510  469  440  455  469  535  567  571  604  598  595  616  629  629  650  638  606  592  579  579  594  706  824  850  882  952  888  719  643  694  790  819  865  914  920  778  543  305  238  248  106   20    0    0    2    2@
  293  263  246  259  276  284  307  324  377  440  445  413  371  373  402  428  442  432  410  423  451  440  427  440  440  442  488  518  560  623  697  754  760  762  708  609  564  567  577  583  596  638  732  825  867  897  924  887  821  788  692  672  805  885  945  907  678  383  373  430  344  176   12   14   29   29@
  322  291  263  259  286  343  413  442  442  415  358  314  303  318  329  329  329  354  387  394  413  433  433  431  431  446  490  522  541  613  671  699  743  745  634  497  461  492  564  610  610  623  724  832  857  897 1006 1225 1248 1096  896  699  641  672  815 1057 1162  972  887  772  619  349   93  103  114  112@
  335  301  288  261  261  288  314  328  328  328  301  274  290  303  290  291  291  282  330  385  425  472  478  463  463  478  505  545  585  630  663  674  699  611  484  463  497  526  568  612  612  610  667  791  882  996 1145 1269 1409 1276 1276 1495 1115  650  659  943 1203 1264 1131  798  665  448  132  105  101   78@
  341  278  274  274  276  278  276  274  276  282  286  280  290  293  299  316  312  339  398  413  413  469  520  516  514  526  524  520  518  558  598  581  568  528  490  539  602  615  610  625  625  612  642  772  867 1031 1353 1295 1139 1126 1126 1263 1410 1172  791  724  655  543  509  524  530  493  333  352  448  410@
  381  307  276  278  293  305  291  276  288  330  364  331  301  324  370  402  373  373  415  427  431  446  524  591  587  587  573  537  514  512  512  482  486  594  705  772  854  863  726  634  625  623  653  733  865 1006 1206 1271 1107 1000 1000 1036 1143 1343 1467 1515 1352  798  501  588  629  552  539  667  871 1077@
  377  316  288  305  318  303  305  291  276  288  343  404  377  349  396  440  425  425  442  429  453  469  457  459  526  623  629  560  488  472  472  442  469  577  614  627  743  823  802  707  625  610  649  752  937 1109 1122 1112 1072  958  958 1036 1134 1134 1069 1421 1706 1360  950  800  762  667  564  528  554  589@
  341  288  276  312  320  304  310  305  291  278  290  341  349  343  398  423  406  408  438  440  429  446  457  467  469  497  537  526  486  474  472  442  446  467  539  636  714  816  850  732  621  613  716  798  910 1097 1178 1201 1103  947  945 1034 1063 1059 1073 1212 1338 1258 1193 1080  799  586  515  518  503  453@
  276  278  291  360  423  413  349  301  301  301  288  274  332  389  402  387  357  375  413  430  442  467  452  425  440  455  455  471  472  482  471  448  478  539  583  610  690  742  701  632  615  651  718  847 1097 1191 1094 1063 1027  953  943 1017 1031  998 1004 1053 1092 1094 1109 1164 1071  962  922  741  628  546@
  293  307  307  318  385  408  326  274  274  274  274  274  305  333  332  322  301  344  425  450  436  427  417  417  430  442  440  454  467  442  463  493  520  579  610  610  608  594  605  697  764  726  726  903 1073 1081 1059 1033  960  897  924  981  985  950  996 1067 1061 1072 1078 1094 1094  977  874  811  753  631@
  327  326  320  305  307  276  263  282  282  278  278  276  301  316  307  335  374  399  399  391  400  430  454  450  452  440  427  427  434  455  508  535  537  581  610  606  593  602  686  761  757  677  686  821  906  973 1004  991  949  882  882  922  956  987 1027 1060 1113 1100 1050 1067 1070 1007  933  844  684  558@
  386  371  324  308  322  290  293  341  337  303  303  291  276  290  318  332  318  310  317  360  427  452  421  394  411  427  429  432  488  541  545  549  564  594  606  576  579  650  677  636  622  646  713  817  964 1056  978  880  867  867  870  968 1022  955  955  995 1000 1009 1036 1063 1094 1122 1060  878  671  518@
  427  411  356  341  335  291  322  381  351  291  291  301  286  288  303  305  310  358  410  420  420  406  379  381  411  429  444  474  491  491  520  549  562  593  579  549  576  606  610  619  723  907  923  909 1001  984  902  862  853  853  882  907  905  911  914  914  955 1022 1022 1031 1067 1086 1009  842  685  538@
  429  415  400  379  334  308  339  379  349  305  303  276  264  276  288  303  349  406  391  360  362  366  369  388  417  444  461  491  518  518  532  547  550  577  576  549  550  586  633  707  784  857  982 1085 1077 1044 1026  923  855  869  878  855  847  887  923  932  932  932  932 1000 1067 1107 1027  865  792  695@
  444  444  427  369  329  342  368  366  335  305  291  293  307  290  274  290  334  360  345  322  339  369  400  442  461  461  488  516  516  518  518  533  562  562  549  550  571  652  806  860  838  884  906  964 1006  968  931  865  858  966  931  869  921  927  991 1056 1062 1072 1077 1072 1067 1067  958  836  792  758@
  455  452  423  398  401  400  381  362  335  310  307  318  317  288  274  291  320  318  307  339  368  394  427  442  484  486  486  499  501  518  516  530  547  549  549  564  623  738  791  803  845  886  836  758  772  791  823  836  788  788  826  872  975 1025  991  974 1014 1095 1148 1111 1065 1065  968  851  798  732@
  440  411  398  415  444  427  381  340  342  356  324  303  288  276  278  303  317  305  320  366  381  381  427  444  457  471  471  471  484  513  499  499  530  547  550  567  608  671  782  886  896  890  818  732  740  788  825  823  863  863  853  901  979 1045  977  950  950  955 1062 1089 1059 1071 1152 1075  838  723@
  428  413  415  447  461  428  384  386  403  398  349  290  276  293  308  291  288  301  317  364  386  391  435  459  455  457  455  455  455  469  471  472  503  533  564  593  594  664  811  896  860  811  777  745  825  884  849  821  816  816  843  901  995  987  865  857  870  928 1018 1007 1106 1211 1219 1143  838  659@
  444  427  440  483  483  440  413  428  454  408  335  290  290  320  335  308  281  279  290  347  420  467  500  466  430  447  442  444  442  444  461  472  501  533  564  579  591  610  708  840  779  737  810  877  969 1001  926  809  765  764  759  787  906  953  836  764  881 1028  987  901 1045 1134 1202 1126  842  698@
  454  428  430  442  440  427  427  442  430  386  337  290  291  329  345  340  337  318  288  315  357  413  454  400  332  359  427  444  437  457  493  483  494  535  566  581  566  608  643  625  689  899 1050 1057 1031  957  906  833  791  774  728  740  828  886  816  777  853  955  953  913  982 1050 1058  989  869  794@
  430  442  454  440  427  427  428  442  450  418  345  290  308  396  425  383  351  303  274  276  290  301  303  310  315  318  322  350  408  464  537  569  555  555  582  604  599  613  684  760  847  903  918  975  992  938  965  919  791  755  703  681  737  767  752  771  847  908  899  901  906  903  987  970  859  801@
  457  444  428  427  427  428  445  444  395  347  305  295  342  401  413  395  349  290  274  290  291  279  296  359  408  438  466  481  511  525  569  618  623  625  630  701  770  775  811  879  919  933  942  972 1001  999 1003  963  901  821  715  638  650  677  664  715  792  845  892  913  837  803  963  941  781  748@
  451  457  442  427  428  452  486  464  384  325  316  349  403  444  427  381  335  291  276  290  305  318  349  425  501  535  538  550  577  581  610  686  727  742  794  826  845  884  950  954  960  958  909  937  954  943  979  994  916  809  703  626  610  610  610  699  788  774  835  889  816  767  987 1040  821  755@
  390  451  439  430  453  542  588  510  413  372  413  456  457  457  427  381  335  305  290  288  302  303  335  411  488  547  576  564  567  596  616  692  686  701  809  857  898  876  859  889  945  935  870  870  898  925  994 1016  933  825  715  637  610  610  611  683  739  743  803  798  757  803  955 1067  920  691@
  334  395  411  464  555  605  530  448  436  433  432  445  457  454  425  384  340  306  290  276  274  290  335  411  486  529  544  564  596  611  669  742  684  699  821  882  881  804  774  803  820  853  884  884  886  886  907  979  955  835  698  610  610  610  625  652  667  716  754  705  713  767  919 1051  830  618@
  320  378  410  520  605  559  517  525  529  499  487  485  467  433  416  411  376  318  291  291  276  288  332  403  463  483  503  564  608  623  657  704  679  695  806  859  844  780  758  775  805  860  890  889  896  898  969  993  906  806  672  610  608  606  622  623  638  711  686  613  686  811  963  914  754  681@
  315  346  396  532  562  523  645  715  626  598  608  598  553  488  456  411  338  306  310  314  296  276  303  330  375  442  509  567  591  613  679  733  747  774  780  776  767  805  857  884  906  906  938  926  870  886  914  881  832  784  681  610  591  573  591  611  626  669  681  637  694  853  997  914  692  650@
  271  302  395  517  550  564  679  704  648  631  607  634  596  488  442  411  369  325  355  399  354  296  294  296  323  434  550  582  559  631  729  740  740  733  675  765  800  769  868  871  832  837  882  899  886  907  929  863  780  716  637  603  559  521  569  625  638  651  632  605  762  977 1053  922  756  743@
  250  284  387  511  572  569  631  735  719  692  716  708  606  488  440  413  398  369  398  427  387  358  345  358  360  378  431  474  518  547  578  675  675  605  713  785  719  692  722  757  779  825  867  894  896  968 1036  940  814  719  610  547  520  552  610  626  626  610  564  569  767  997 1081 1006  857  849@
  325  386  459  584  646  620  689  762  747  747  713  635  578  492  433  428  413  399  416  434  447  433  434  433  450  502  486  495  526  537  564  578  576  565  678  707  617  619  645  718  792  838  852  849  862  891  890  890  864  750  616  540  538  579  608  640  640  610  567  608  803 1048 1206 1141 1020  950@
  497  553  594  611  690  712  716  762  750  747  681  593  567  538  492  450  434  434  468  512  492  488  500  486  518  625  622  584  604  575  573  564  549  578  608  629  694  709  694  735  791  838  837  803  803  818  803  802  818  776  672  597  581  578  593  648  648  610  596  599  765 1023 1208 1109  992  989@
  #`;

  //criando um objeto q se comporta como um file com um get_line q retorna a proxima linha cada vez que eh chamada.
  pointer = 0

  map = new Object();
  map.text = file;
  map.pointer = 0;
  map.done = false;
  map.get_line = function() {

    var s = "";
    while(this.text[this.pointer] != "@") {
      s += this.text[this.pointer]
      this.pointer++

      if (this.text[this.pointer] == '#') {
        this.done = true;
        return "EOF"
      };
    }
    this.pointer++
    return s;
  };
  map.reset_line = function() {
    this.pointer = 0;
    this.done = false;
  };

  return map

}

//MOD2-
//funcao para parsear as primeiras linhas da string 
function parse_coord(file){
  console.log("parsin lat long");
  var lat_line = file.get_line()
  lat = lat_line.match(/\d+(?:\.\d+)?/g).map(Number) //small regex that get only numbers and convert to a list of numbers (got on stackoverflow)

  var long_line = file.get_line()
  long = long_line.match(/\d+(?:\.\d+)?/g).map(Number)

  coord = new Object();
  coord.min_lat = lat[0]
  coord.max_lat = lat[1]
  coord.min_long = long[0]
  coord.max_long = long[1]

  console.log(coord)
  return coord
}

//MOD2-
//funcao para parsear o restante do file em uma matriz para ser usada no algoritimo
function parse_map(file) {
  dimensions = file.get_line().match(/\d+(?:\.\d+)?/g).map(Number)
  rows = dimensions[0]
  lines = dimensions[1]
  console.log(dimensions)

  matrix = []
  while (!file.done){
    row = file.get_line()
    if(row == "EOF"){
      continue
      }
    row = row.match(/\d+(?:\.\d+)?/g).map(Number)
    matrix.push(row)
  }

  console.log("Matrix done")
  

  map = {
    rows : rows,
    lines : lines,
    matrix : matrix
  }

  return map;

}

//MOD2-
//funcao para normalizar a matriz
function normalize_matrix(matrix){
  
  console.log("normalizing")

  //iterate and get maximun and minimal values:
  var max = 0
  var min = 999999
  
  matrix.forEach(element => {
    max = Math.max(max, Math.max(...element))
    min = Math.min(min, Math.min(...element))
  }); 

  
  //console.log(max)
  //console.log(min)

  //iterate normalizing

  normal = matrix.map(function (row) {
    return row.map(function (item) {return(item - min) / max})
  });

  //console.log(normal)

  return normal
}

//Mod2- 
//funcao q aplica escala na matrix normalizada

function Scale_matrix(matrix, scale){
  return matrix.map(function (row) {
    return row.map(function (item) {return(item * scale)})
  });
}

function main(){
  console.log("main");
  
  //Mod2- escala para o modelo de topologia (Recomendo brincar com a escala xD)
  SCALE = 20

  //Mod2-
  //parsin the file:
  file = Get_high()
  coord = parse_coord(file)
  map = parse_map(file)
  map.normal = normalize_matrix(map.matrix)
  map.scaled = Scale_matrix(map.normal, SCALE)
  console.log(map)

  //Mod2-
  //Aqui eu terminei de fazer o parsing e pre processamento do arquivo...
  //Foi muito pior do que esperava, acho q to muito acostumado com Python e C...


  const canvas = document.querySelector('#glcanvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

  // If we don't have a GL context, give up now

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.');
    return;
  }

  // Vertex shader program

  const vsSource = `
    attribute vec4 aVertexPosition;
    attribute vec4 aVertexColor;

    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;

    varying lowp vec4 vColor;

    void main(void) {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      vColor = aVertexColor;
    }
  `;

  // Fragment shader program

  const fsSource = `
    varying lowp vec4 vColor;

    void main(void) {
      gl_FragColor = vColor;
    }
  `;

  // Initialize a shader program; this is where all the lighting
  // for the vertices and so forth is established.
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  // Collect all the info needed to use the shader program.
  // Look up which attributes our shader program is using
  // for aVertexPosition, aVevrtexColor and also
  // look up uniform locations.
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    }
  };

  // Here's where we call the routine that builds all the
  // objects we'll be drawing.
  const buffers = initBuffers(gl);

  var then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

//
// initBuffers
//
// Initialize the buffers we'll need. For this demo, we just
// have one object -- a simple three-dimensional cube.
//
function initBuffers(gl) {

  // Create a buffer for the cube's vertex positions.

  const positionBuffer = gl.createBuffer();

  // Select the positionBuffer as the one to apply buffer
  // operations to from here out.

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Now create an array of positions for the cube.

  //MOD2-
  //Agora vamos trocar as posicoes, todos os vertices sao a matrix lida no arquivo:

  var positions = []
  var x = 0
  var z = 0

  map.scaled.forEach(element => {
    element.forEach(item => {
      positions.push(x)//x
      positions.push(item)//y
      positions.push(z)//
      x++
    })
    z++
    x = 0
  });

  console.log(positions)


  // Now pass the list of positions into WebGL to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Now set up the colors for the faces. We'll use solid colors
  // for each face.

    //MOD2-
    //para cada vertice precisamos de 4 floats para indicar a cor daquele ponto
    //essa cor sera definida pela altura do ponto

    var colors = []

  
    map.normal.forEach(element => {
      element.forEach(item => {
        colors.push(item);    //r
        colors.push(item);    //g
        colors.push(1-item);  //b
        colors.push(1.0);     //alpha (always 1)
      })
    });

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  // Build the element array buffer; this specifies the indices
  // into the vertex arrays for each face's vertices.

  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

  // This array defines each face as two triangles, using the
  // indices into the vertex array to specify each triangle's
  // position.

  //MOD2- vertices dos triangulos 
  //
  var indices = []

  var i = 0
  var j = 0
  
  //Fazendo os indeces com uma conta...
  for (i; i < map.lines -1; i++){
    for (j = 0; j < map.rows -1; j++){
      //Triangulo 1
      indices.push(i*map.rows + j);
      indices.push(i*map.rows + (j+1));
      indices.push((i+1)*map.rows + j);
      //tringulo 2
      indices.push(i*map.rows + (j+1));
      indices.push((i+1)*map.rows + j);
      indices.push((i+1)*map.rows + j + 1);
      //esses 2 triangulos preenchem uma area quadrada da mesh
    }
  }

  console.log(indices.length)
  console.log(indices)

  // Now send the element array to GL

  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices), gl.STATIC_DRAW);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };
}

//
// Draw the scene.
//
function drawScene(gl, programInfo, buffers, deltaTime) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);  // Clear to black, fully opaque
  gl.clearDepth(1.0);                 // Clear everything
  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  // Clear the canvas before we start drawing on it.

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  // Create a perspective matrix, a special matrix that is
  // used to simulate the distortion of perspective in a camera.
  // Our field of view is 45 degrees, with a width/height
  // ratio that matches the display size of the canvas
  // and we only want to see objects between 0.1 units
  // and 100 units away from the camera.

  const fieldOfView = 75 * Math.PI / 180;   // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 10000.0;
  const projectionMatrix = mat4.create();

  // note: glmatrix.js always has the first argument
  // as the destination to receive the result.
  mat4.perspective(projectionMatrix,
                   fieldOfView,
                   aspect,
                   zNear,
                   zFar);

  // Set the drawing position to the "identity" point, which is
  // the center of the scene.
  const modelViewMatrix = mat4.create();

  // Now move the drawing position a bit to where we want to
  // start drawing the square.

  //MOD- Tem duas matrizes de rotacao trabalhando em cima do modelo
  //Ela trabalham redesenhando o modelo na posicao correta dada pela variavel
  //cubeRotation, q eh o tempo em segundos da animacao ate agora.
  //Vamos deixar apenas a rotacao em Y
  //(translate eh apenas para centralizar o modelo, nao depende do tempo.)
  
  //console.log(cubeRotation);

  //MOD2- Mudando os valores para nao girar e ser plotado na posicao desejada

  mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                2.4 + Math.sin(triRotation) * 0.01,// amount to rotate in radians
                [0, 1, 0]);
  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0, -5, 50.0]);  // amount to translate
  mat4.rotate(modelViewMatrix,  // destination matrix
                  modelViewMatrix,  // matrix to rotate
                  -0.8 + Math.sin(triRotation) * 0.2,// amount to rotate in radians
                  [1, 0, 0]);
  mat4.rotate(modelViewMatrix,  // destination matrix
                  modelViewMatrix,  // matrix to rotate
                  0.6 ,// amount to rotate in radians
                  [0, 1, 0]);

  /*
  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              triRotation * .7,// amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around (X)
  mat4.rotate(modelViewMatrix,  // destination matrix
                modelViewMatrix,  // matrix to rotate
                triRotation * .7,// amount to rotate in radians
                [1, 0, 0.2]);       // axis to rotate around (X)
  //OLD
  /*
  mat4.translate(modelViewMatrix,     // destination matrix
                 modelViewMatrix,     // matrix to translate
                 [-0.0, 0.0, -6.0]);  // amount to translate
  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              cubeRotation,     // amount to rotate in radians
              [0, 0, 1]);       // axis to rotate around (Z)
  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              cubeRotation * .7,// amount to rotate in radians
              [0, 1, 0]);       // axis to rotate around (X)
  */

  // Tell WebGL how to pull out the positions from the position
  // buffer into the vertexPosition attribute
  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  // Tell WebGL how to pull out the colors from the color buffer
  // into the vertexColor attribute.
  {
    const numComponents = 4;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
  //console.log("Sending Colors");
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexColor,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexColor);
    //console.log("Colors Sent");
  }

  // Tell WebGL which indices to use to index the vertices
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);

  // Tell WebGL to use our program when drawing

  gl.useProgram(programInfo.program);

  // Set the shader uniforms

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);

  {
    //MOD2-
    //para cada 1 ponto da matriz tenho 6 vertices (2 triangulos) porem sem contar 2 das filerias de bordas
    //entao (altura - 1) * (largura - 1)
    const vertexCount = 18330
    console.log(vertexCount)
    //OLD
    //const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }

  // Update the rotation for the next draw

  triRotation += deltaTime;
}

//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  // Create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  // If creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
    return null;
  }

  return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

