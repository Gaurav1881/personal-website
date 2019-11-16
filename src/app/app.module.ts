import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import { ExperienceListComponent } from './skill-search/experience-list/experience-list.component';
import { ExperienceItemComponent } from './skill-search/experience-item/experience-item.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    SkillSearchComponent,
    ExperienceListComponent,
    ExperienceItemComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
