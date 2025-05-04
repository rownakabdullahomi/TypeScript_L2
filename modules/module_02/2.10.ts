{
  // mapped types
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"];    // lookup type

  type AreaString<T> = {
    [key in keyof T ]: T[key];
  };


  const area1: AreaString<{height: string; width: number}> = {
    height: '100',
    width:250
  }













}
