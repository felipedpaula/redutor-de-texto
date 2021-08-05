/* Caso necessite usar uma função php */

function reducer_description($data , $qt_carac) {
    $txt_red = substr($data, 0 , $qt_carac);
    $arr = explode(" ", $txt_red);
    array_pop($arr);
    $txt_final = implode(" ", $arr).'...';
    return $txt_final;
}
