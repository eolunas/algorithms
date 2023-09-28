class SingletonTS {
  private static instance: SingletonTS;
  private version: string;

  private constructor(version: string) {
    this.version = version;
  }
  static getInstance(version: string): SingletonTS {
    if (!SingletonTS.instance) {
        SingletonTS.instance = new SingletonTS(version);
    }

    return SingletonTS.instance;
  }
}

function appSingleton() {
  const singleton1 = SingletonTS.getInstance("version-1");
  const singleton2 = SingletonTS.getInstance("version-2");
  const singleton3 = SingletonTS.getInstance("version-3");
  
  console.log(singleton1 === singleton3);
}

appSingleton();
