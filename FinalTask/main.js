function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth* 0.5,
        height: window.innerHeight,
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, screen );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth* 0.5, window.innerHeight ] );
    });

    screen.loop();

    var r_value, g_value, b_value;
    var meterial_val;

    /* change isovalue function */
    $('#isovalue_val').html($('#isovalue_change').val());
    $('#isovalue_change').on('input change', function() {
      $('#isovalue_val').html($(this).val());
      screen.scene.remove(surfaces);
      isovalue = $(this).val();
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    });

    /* change Color_R function */
    $('#color_R_val').html($('#color_R').val());
    $('#color_R').on('input change', function() {
      $('#color_R_val').html($(this).val());
      screen.scene.remove(surfaces);
      r_value = $(this).val();
      changeColor_R(r_value);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    });
    /* change Color_G function */
    $('#color_G_val').html($('#color_G').val());
    $('#color_G').on('input change', function() {
      $('#color_G_val').html($(this).val());
      screen.scene.remove(surfaces);
      g_value = $(this).val();
      changeColor_G(g_value);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    });
    /* change Color_B function */
    $('#color_B_val').html($('#color_B').val());
    $('#color_B').on('input change', function() {
      $('#color_B_val').html($(this).val());
      screen.scene.remove(surfaces);
      b_value = $(this).val();
      changeColor_B(b_value);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    });

    /* changeMeterial：　0:Normal_Btn */
    $('#Normal_Btn').on('click', function(){
      meterial_val = "0";
      screen.scene.remove(surfaces);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    })
    /* changeMeterial：　1:Lambertian_Btn */
    $('#Lambertian_Btn').on('click', function(){
      meterial_val = "1";
      screen.scene.remove(surfaces);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    })
    /* changeMeterial：　2:Phong_Btn */
    $('#Phong_Btn').on('click', function(){
      meterial_val = "2";
      screen.scene.remove(surfaces);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    })
    /* changeMeterial：　3:BlinnPhong_Btn */
    $('#BlinnPhong_Btn').on('click', function(){
      meterial_val = "3";
      screen.scene.remove(surfaces);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);
    })
    

    /* Reset */
    $('#Reset_Btn').on('click', function(){
      isovalue = 128;
      r_value = 150;
      g_value = 80;
      b_value = 100;
      meterial_val = "0";
      screen.scene.remove(surfaces);

      /* isovalue */
      $('#isovalue_change').val(isovalue);
      $('#isovalue_val').html(isovalue);
      /* Color */
      $('#color_R').val(r_value);
      $('#color_R_val').html(r_value);
      $('#color_G').val(g_value);
      $('#color_G_val').html(g_value);
      $('#color_B').val(b_value);
      $('#color_B_val').html(b_value);

      changeColor_R(r_value);
      changeColor_G(g_value);
      changeColor_B(b_value);
      changeMeterial(meterial_val,screen);
      surfaces = Isosurfaces(volume, isovalue, screen );
      screen.scene.add(surfaces);

  })
  
}
