import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MemoryDetailComponent } from './components/memories/memory-detail/memory-detail.component';
import { FormsModule } from '@angular/forms';
import { MemoryMasterComponent } from './components/memories/memory-master/memory-master.component';
import { MemoryComponent } from './components/memories/memory/memory.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveMemoryModalComponent } from './components/memories/remove-memory-modal/remove-memory-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MemoryDetailComponent,
    MemoryMasterComponent,
    MemoryComponent,
    RemoveMemoryModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
