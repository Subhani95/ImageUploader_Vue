<template>
  <div>
    <v-app-bar app color="dark lighten-5">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 350px"> Image Upload </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn color="dark" class="mr-2 black--text" @click="home">
        <v-icon> mdi-home-variant</v-icon>
      </v-btn>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="mr-1 transparent"
            @click="profile"
          >
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>
      </v-menu>

      <v-btn color="dark" class="mr-2 black--text" @click="updateProfile">
        <v-icon> mdi-update</v-icon>
      </v-btn>

      <v-btn color="dark" class="black--text" @click="logout"> Logout </v-btn>
    </v-app-bar>

    <div
      class="uploader"
      @dragenter="OnDragEnter"
      @dragleave="OnDragLeave"
      @dragover.prevent
      @drop="onDrop"
      :class="{ dragging: isDragging }"
    >
      <div class="upload-control" v-show="images.length">
        <label for="file">Select a file</label>
        <button @click="upload">Upload</button>
      </div>

      <div v-show="!images.length">
        <i class="fa fa-cloud-upload"></i>
        <p>Select OR Drag your pictures</p>
        <div class="file-input">
          <label for="file">Upload!</label>
          <input type="file" id="file" @change="onInputChange" multiple />
        </div>
      </div>

      <div class="images-preview" v-show="images.length">
        <div class="img-wrapper" v-for="(image, index) in images" :key="index">
          <img :src="image" :alt="`Image Uplaoder ${index}`" />
          <div class="details">
            <span class="name" v-text="files[index].name"></span>
            <span class="size" v-text="getFileSize(files[index].size)"></span>
          </div>
        </div>
      </div>
    </div>
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <v-img
          :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    isDragging: false,
    dragCount: 0,
    files: [],
    images: [],
    imageobject: {
      name2: '',
      file2: '',
    },
  }),
  methods: {
    OnDragEnter(e) {
      e.preventDefault()

      this.dragCount++
      this.isDragging = true

      return false
    },
    OnDragLeave(e) {
      e.preventDefault()
      this.dragCount--

      if (this.dragCount <= 0) this.isDragging = false
    },
    onInputChange(e) {
      const files = e.target.files

      Array.from(files).forEach((file) => this.addImage(file))
    },
    onDrop(e) {
      e.preventDefault()
      e.stopPropagation()

      this.isDragging = false

      const files = e.dataTransfer.files

      Array.from(files).forEach((file) => this.addImage(file))
    },
    addImage(file) {
      if (!file.type.match('image.*')) {
        console.log(`${file.name} is not an image`)
        return
      }

      this.files.push(file)

      const img = new Image()
      console.log(img)

      const reader = new FileReader()
      const that = this
      reader.onload = (e) => {
        that.imageobject.name2 = file.name
        that.imageobject.file2 = e.target.result
        that.images.push(that.imageobject)
        console.log(that.images)
      }

      reader.readAsDataURL(file)
    },
    getFileSize(size) {
      const fSExt = ['Bytes', 'KB', 'MB', 'GB']
      let i = 0

      while (size > 900) {
        size /= 1024
        i++
      }

      return `${Math.round(size * 100) / 100} ${fSExt[i]}`
    },
    upload() {
      this.$store.dispatch('uploadimages', this.images[0])
      console.log(this.images)
    },
    profile() {
      this.$store.dispatch('profile')
      this.$router.push({ name: 'Profile' })
    },
    logout() {
      this.$store.dispatch('logOut')
      this.$router.push({ name: 'Signin' })
    },
    updateProfile() {
      this.$store.dispatch('updateuser', this.user)
      this.$router.push({ name: 'UpdateProfile' })
    },
  },
}
</script>

<style lang="scss" scoped>
.uploader {
  width: 100%;
  background: rgb(216, 211, 211);
  color: rgb(12, 11, 11);
  padding: 40px 15px;
  text-align: center;
  border-radius: 10px;
  border: 2px solid #fff;
  font-size: 15px;
  position: relative;

  &.dragging {
    background: #fff;
    color: #d0eaff;
    border: 3px dashed black;

    .file-input label {
      background: rgb(233, 232, 232);
      color: #fff;
    }
  }

  i {
    font-size: 85px;
  }

  .file-input {
    width: 200px;
    margin: auto;
    height: 68px;
    position: relative;

    label,
    input {
      background: #fff;
      color: black;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      padding: 10px;
      border-radius: 4px;
      margin-top: 7px;
      cursor: pointer;
    }

    input {
      opacity: 0;
      z-index: -2;
    }
  }

  .images-preview {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .img-wrapper {
      width: 160px;
      display: flex;
      flex-direction: column;
      margin: 10px;
      height: 150px;
      justify-content: space-between;
      background: #fff;
      box-shadow: 5px 5px 20px #3e3737;

      img {
        max-height: 105px;
      }
    }

    .details {
      font-size: 12px;
      background: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: self-start;
      padding: 3px 6px;

      .name {
        overflow: hidden;
        height: 18px;
      }
    }
  }

  .upload-control {
    position: absolute;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    padding: 10px;
    padding-bottom: 4px;
    text-align: right;

    button,
    label {
      background: black;
      border: 2px solid white;
      border-radius: 3px;
      color: #fff;
      font-size: 15px;
      cursor: pointer;
    }

    label {
      padding: 2px 5px;
      margin-right: 10px;
    }
  }
}
</style>
